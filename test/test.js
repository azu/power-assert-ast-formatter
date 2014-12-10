// LICENSE : MIT
"use strict";
var escodegen = require("escodegen");
function isAST(rootNode) {
    return typeof rootNode === "object" && rootNode.type === "Program";
}
var parse = require("esprima").parse;
var outputASTCustomization = {
    output: {
        stringify: function (ast) {
            if (!isAST(ast)) {
                return ast;
            }
            return escodegen.generate(ast);
        }
    }
};
var assert = require('power-assert').customize(outputASTCustomization);
describe("test", function () {
    it("is test", function () {
        var xAST = parse("var n = 1\nvar x;");
        var yAST = parse("var n = 2\nvar y;");
        assert.deepEqual(xAST, yAST);
    });
});