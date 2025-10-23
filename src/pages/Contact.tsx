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

const StatusMessage = styled.div<{ type: 'success' | 'error' | null }>`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;

  ${({ type }) => type === 'success' && `
    background-color: rgba(0, 128, 0, 0.1);
    color: green;
  `}

  ${({ type }) => type === 'error' && `
    background-color: rgba(255, 0, 0, 0.1);
    color: red;
  `}
`;

const SubmitButton = styled.button<{ isSubmitting?: boolean }>`
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

  ${({ isSubmitting }) => isSubmitting && `
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    pointer-events: none;
  `}
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzC6i288xwbTvDb-MkovisBqUNOCkcuQNvZCrDVRjAv3eNuZEXXdSPstQJeCJPhR1s/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors'
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Clear the form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again later.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Title>Contact Us</Title>
        {submitStatus.type && (
          <StatusMessage type={submitStatus.type}>
            {submitStatus.message}
          </StatusMessage>
        )}
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

          <SubmitButton type="submit" isSubmitting={isSubmitting} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </Form>
      </ContentContainer>
    </PageContainer>
  );
};

export default Contact;
