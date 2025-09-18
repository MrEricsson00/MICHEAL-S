const assert = require('assert');

describe('Contact Form Submission', () => {
    it('should send an email to Gmail', () => {
        const formData = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            message: 'Hello, this is a test message.'
        };

        const emailSent = sendEmail(formData); // Assuming sendEmail is the function to send email
        assert.strictEqual(emailSent, true);
    });
});