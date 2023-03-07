const swaggerDocs = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "Example REST API Shoe Store",
        description: "API for shoes",
        license: {
            name: "MIT",
            url: "https://opensource.org/licenses/MIT",
        },
    },
    host: "localhost:4000",
    basePath: "/",
    tags: [
        {
            name: "Shoes",
            description: "shoes in the database",
        },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
        "/shoesChildren": {
            get: {
                tags: ["ShoesChildren"],
                summary: "Get all shoes for children in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesChildren",
                        },
                    },
                },
            },
            post: {
                tags: ["ShoesChildren"],
                summary: "Add a new shoe",
                parameters: [
                    {
                        name: "ShoesChildren",
                        in: "body",
                        description: "Shoe to be added",
                        schema: {
                            $ref: "#/definitions/ShoesChildren",
                        },
                    },
                ],
                responses: {
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/ShoesChildren",
                        },
                    },
                },
            },
        },
        "/{id}": {
            get: {
                tags: ["ShoesChildren"],
                summary: "Get a specific shoe by id",
                parameters: [
                    {
                        name: "id",
                        in: "body",
                        description: "Id of the shoe searched for",
                        schema: {
                            $ref: "#/definitions/ShoesChildren",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesChildren",
                        },
                    },
                },
            },
        },
        "/search": {
            get: {
                tags: ["ShoesChildren"],
                summary: "Get a specific shoe by name",
                parameters: [
                    {
                        name: "name",
                        in: "path",
                        description: "Name of the shoe searched for",
                        schema: {
                            $ref: "#/definitions/ShoesChildren",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesChildrens",
                        },
                    },
                },
            },
        },

        "/shoesMen": {
            get: {
                tags: ["ShoesMen"],
                summary: "Get all shoes for men in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesMen",
                        },
                    },
                },
            },
            post: {
                tags: ["ShoesMen"],
                summary: "Add a new shoe",
                parameters: [
                    {
                        name: "ShoesMen",
                        in: "body",
                        description: "Shoe to be added",
                        schema: {
                            $ref: "#/definitions/ShoesMen",
                        },
                    },
                ],
                responses: {
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/ShoesMen",
                        },
                    },
                },
            },
        },
        "/{id}": {
            get: {
                tags: ["ShoesMen"],
                summary: "Get a specific shoe by id",
                parameters: [
                    {
                        name: "id",
                        in: "body",
                        description: "Id of the shoe searched for",
                        schema: {
                            $ref: "#/definitions/ShoesMen",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesMen",
                        },
                    },
                },
            },
        },
        "/search": {
            get: {
                tags: ["ShoesMen"],
                summary: "Get a specific shoe by name",
                parameters: [
                    {
                        name: "name",
                        in: "path",
                        description: "Name of the shoe searched for",
                        schema: {
                            $ref: "#/definitions/ShoesMen",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesMen",
                        },
                    },
                },
            },
        },

        "/shoesWomen": {
            get: {
                tags: ["ShoesWomen"],
                summary: "Get all shoes for women in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesWomen",
                        },
                    },
                },
            },
            post: {
                tags: ["ShoesWomen"],
                summary: "Add a new shoe",
                parameters: [
                    {
                        name: "ShoesWomen",
                        in: "body",
                        description: "Shoe to be added",
                        schema: {
                            $ref: "#/definitions/ShoesWomen",
                        },
                    },
                ],
                responses: {
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/ShoesWomen",
                        },
                    },
                },
            },
        },
        "/{id}": {
            get: {
                tags: ["ShoesWomen"],
                summary: "Get a specific shoe by id",
                parameters: [
                    {
                        name: "id",
                        in: "body",
                        description: "Id of the shoe searched for",
                        schema: {
                            $ref: "#/definitions/ShoesWomen",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesWomen",
                        },
                    },
                },
            },
        },
        "/search": {
            get: {
                tags: ["ShoesWomen"],
                summary: "Get a specific shoe by name",
                parameters: [
                    {
                        name: "name",
                        in: "path",
                        description: "Name of the shoe searched for",
                        schema: {
                            $ref: "#/definitions/ShoesWomen",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/ShoesWomen",
                        },
                    },
                },
            },
        },
    },

    definitions: {

        ShoesChildren: {
            required: ["name", "category", "brand", "price", "size", "color", "fastener", "gender"],
            properties: {
                name: {
                    type: "string",
                },
                category: {
                    type: "string",
                },
                brand: {
                    type: "string",
                },
                price: {
                    type: "number",
                },
                size: {
                    type: "number",
                },
                color: {
                    type: "string",
                },
                fastener: {
                    type: "string",
                },
                gender: {
                    type: "string",
                },
            },
        },

        ShoesMen: {
            required: ["name", "category", "brand", "price", "size", "color"],
            properties: {
                name: {
                    type: "string",
                },
                category: {
                    type: "string",
                },
                brand: {
                    type: "string",
                },
                price: {
                    type: "number",
                },
                size: {
                    type: "number",
                },
                color: {
                    type: "string",
                },
            },
        },

        ShoesWomen: {
            required: ["name", "category", "brand", "price", "size", "color", "heelType", "heelHeight"],
            properties: {
                name: {
                    type: "string",
                },
                category: {
                    type: "string",
                },
                brand: {
                    type: "string",
                },
                price: {
                    type: "number",
                },
                size: {
                    type: "number",
                },
                color: {
                    type: "string",
                },
                heelType: {
                    type: "string",
                },
                heelHeight: {
                    type: "string",
                },
            },
        },
    },
};

export default swaggerDocs;