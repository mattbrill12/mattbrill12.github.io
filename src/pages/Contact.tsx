import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 80px 0 4rem;
  background: white;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 2rem auto;
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 2.5rem;
  color: #2D1A33;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #2D1A33;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid rgba(45, 26, 51, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2D1A33;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid rgba(45, 26, 51, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2D1A33;
  }
`;

const SubmitButton = styled.button`
  background: #2D1A33;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 1rem;

  &:hover {
    background: #3D2A43;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(45, 26, 51, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, just log the form data
        console.log('Form submitted:', formData);
        // Here you would typically send the data to a server
        alert('Thank you for your message! We will get back to you soon.');
        // Clear the form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <PageContainer>
            <ContentContainer>
                <Title>Contact Us</Title>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <InputGroup>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </InputGroup>
                    </FormGroup>

                    <InputGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="message">Message</Label>
                        <TextArea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </InputGroup>

                    <SubmitButton type="submit">Send Message</SubmitButton>
                </Form>
            </ContentContainer>
        </PageContainer>
    );
};

export default Contact;
