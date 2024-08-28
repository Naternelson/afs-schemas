import Joi from "joi";

export const organizationSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': 'Name must be a string',
        'string.empty': 'Name cannot be empty',
        'any.required': 'Name is required',
    }),
    description: Joi.string().required().messages({
        'string.base': 'Description must be a string',
        'string.empty': 'Description cannot be empty',
        'any.required': 'Description is required',
    }),
    tags: Joi.array().items(Joi.string()).optional().default([]).messages({
        'array.base': 'Tags must be an array',
    }),
    departments: Joi.array().items(Joi.string()).optional().default([]).messages({
        'array.base': 'Departments must be an array',
    }),
    owners: Joi.array().items(Joi.string()).required().min(1).messages({
        'array.base': 'Owners must be an array',
        'array.min': 'There must be at least one owner',
        'any.required': 'Owners are required',
    }),
}); 