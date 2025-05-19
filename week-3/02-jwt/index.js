const jwt = require("jsonwebtoken");
const z = require("zod");
const jwtPassword = "secret";

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const emailValidation = z.object({
  email: z.string().email(),
});
function signJwt(username, password) {
  if (String(password).length < 6) {
    return null;
  }

  const validation = emailValidation.safeParse({ email: username });
  if (!validation.success) {
    return null;
  }

  try {
    return jwt.sign({ username, password }, jwtPassword);
  } catch (e) {
    return null;
  }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword); // throws if invalid
    return true;
  } catch {
    return false;
  }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  const decoded = jwt.decode(token);
  return decoded || false;
}

// signJwt("tayyabsultan621@gmail.com", 1723672146732);
// verifyJwt(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRheXlhYnN1bHRhbjYyMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6MTcyMzY3MjE0NjczMiwiaWF0IjoxNzQ3NTgwMTc1fQ.mgfMQ5HmiaKg2-SvJ-l8_dQ5fI2q91Nfo5JlvUm_e"
// );

// decodeJwt;
module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
