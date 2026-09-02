import React, { useState, useEffect } from 'react';
import brochurePdf from '../assets/img/about/GargiBrochure.pdf';
import './BrochureModal.css';

const BrochureModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    serviceInterest: 'PEB Design & Engineering'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company Name is required';
    }
    return newErrors;
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = brochurePdf;
    link.setAttribute('download', 'Gargi_Engineering_Brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const apiUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
      await fetch(`${apiUrl}/api/brochure`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn('Brochure notification skipped:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      triggerDownload();
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setErrors({});
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      designation: '',
      serviceInterest: 'PEB Design & Engineering'
    });
    onClose();
  };

  return (
    <div className="brochure-modal-overlay" onClick={handleClose}>
      <div
        className="brochure-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="brochure-modal-close-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {!isSubmitted ? (
          <div className="brochure-modal-content">
            <div className="brochure-modal-header">
              <div className="brochure-badge">
                <i className="fa-solid fa-file-pdf"></i>
                <span>Official Corporate Brochure</span>
              </div>
              <h3 className="brochure-modal-title">Download Company Brochure</h3>
              <p className="brochure-modal-subtitle">
                Please provide your contact details to instantly access our comprehensive structural engineering & PEB capabilities brochure.
              </p>
            </div>

            <form className="brochure-form" onSubmit={handleSubmit} noValidate>
              <div className="brochure-form-grid">
                {/* Full Name */}
                <div className="brochure-form-group">
                  <label htmlFor="fullName">Full Name <span className="required-star">*</span></label>
                  <div className="input-wrapper">
                    <i className="fa-regular fa-user input-icon"></i>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={errors.fullName ? 'error' : ''}
                    />
                  </div>
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                {/* Email Address */}
                <div className="brochure-form-group">
                  <label htmlFor="email">Work Email <span className="required-star">*</span></label>
                  <div className="input-wrapper">
                    <i className="fa-regular fa-envelope input-icon"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className={errors.email ? 'error' : ''}
                    />
                  </div>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div className="brochure-form-group">
                  <label htmlFor="phone">Phone Number <span className="required-star">*</span></label>
                  <div className="input-wrapper">
                    <i className="fa-solid fa-phone input-icon"></i>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={errors.phone ? 'error' : ''}
                    />
                  </div>
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                {/* Company Name */}
                <div className="brochure-form-group">
                  <label htmlFor="company">Company / Organization <span className="required-star">*</span></label>
                  <div className="input-wrapper">
                    <i className="fa-regular fa-building input-icon"></i>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Infra Pvt Ltd"
                      className={errors.company ? 'error' : ''}
                    />
                  </div>
                  {errors.company && <span className="error-message">{errors.company}</span>}
                </div>

                {/* Designation (Optional) */}
                <div className="brochure-form-group">
                  <label htmlFor="designation">Designation / Role <span className="optional-tag">(Optional)</span></label>
                  <div className="input-wrapper">
                    <i className="fa-solid fa-id-badge input-icon"></i>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g. Project Manager / Lead Engineer"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div className="brochure-form-group">
                  <label htmlFor="serviceInterest">Service of Primary Interest</label>
                  <div className="input-wrapper">
                    <i className="fa-solid fa-layer-group input-icon"></i>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                    >
                      <option value="PEB Design & Engineering">PEB Design & Structural Engineering</option>
                      <option value="Structural Steel Detailing">Structural Steel Detailing</option>
                      <option value="Value Engineering & Optimization">Value Engineering & Optimization</option>
                      <option value="Cost Estimation & Quantity Surveying">Cost Estimation & Quantity Surveying</option>
                      <option value="Turnkey EPC Consulting">Turnkey EPC Consulting</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                    <i className="fa-solid fa-chevron-down select-chevron"></i>
                  </div>
                </div>
              </div>

              <div className="brochure-form-actions">
                <button
                  type="submit"
                  className="brochure-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Preparing Brochure...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-download"></i>
                      Submit & Download Brochure
                    </>
                  )}
                </button>
              </div>

              <div className="brochure-privacy-note">
                <i className="fa-solid fa-lock"></i>
                <span>Your information is strictly confidential and protected by Gargi Engineering Services.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="brochure-success-state">
            <div className="success-icon-wrap">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <h3>Thank You{formData.fullName.trim() ? `, ${formData.fullName.trim().split(' ')[0]}` : ''}!</h3>
            <p>
              Your download for <strong>Gargi Engineering Services Brochure</strong> has started automatically.
            </p>
            <div className="manual-download-box">
              <p className="manual-text">Access your brochure anytime:</p>
              <div className="brochure-action-btns-group">
                <a
                  href={brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brochure-view-btn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Open / View PDF
                </a>
                <button onClick={triggerDownload} className="manual-download-btn" type="button">
                  <i className="fa-solid fa-file-arrow-down"></i> Download Again
                </button>
              </div>
            </div>
            <button onClick={handleClose} className="brochure-done-btn" type="button">
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrochureModal;
