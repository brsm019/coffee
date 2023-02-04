const assert = require("assert");
const User = require("../../../api/models/userModels");
const bcrypt = require("bcrypt");

describe("User", () => {
  describe("comparePassword", () => {
    it("should return true if the password matches the hash", () => {
      const user = new User({
        firstName: "Test",
        lastName: "User",
        email: "test@user.com",
        hash_password: bcrypt.hashSync("password", 10),
      });

      const result = user.comparePassword("password");
      assert.strictEqual(result, true);
    });

    it("should return false if the password doesn't match the hash", () => {
      const user = new User({
        firstName: "Test",
        lastName: "User",
        email: "test@user.com",
        hash_password: bcrypt.hashSync("password", 10),
      });

      const result = user.comparePassword("wrong_password");
      assert.strictEqual(result, false);
    });
  });
});
