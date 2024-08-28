import Joi from 'joi';

export const exampleSchema = Joi.object({
	message: Joi.string().required().messages({
		'string.base': 'Message must be a string',
		'string.empty': 'Message cannot be empty',
		'any.required': 'Message is required',
	}),
});
