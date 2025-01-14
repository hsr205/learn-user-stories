export default {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/tests"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};