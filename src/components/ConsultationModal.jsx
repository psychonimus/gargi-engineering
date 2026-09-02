import React, { useState, useEffect } from 'react';
import {
  LuX,
  LuUser,
  LuMail,
  LuPhone,
  LuBuilding2,
  LuWrench,
  LuMessageSquare,
  LuSend,
  LuCalendar,
  LuSparkles
} from 'react-icons/lu';
import './ConsultationModal.css';

const CheckCircleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'PEB Design & Structural Engineering',
    projectType: 'Industrial Facility / Plant',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState(null);
  const [serverError, setServerError] = useState('');

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

  // Lock body scroll when modal is active
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
    if (serverError) {
      setServerError('');
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company / Organization is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const apiUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiUrl}/api/consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data = {};
      try {
        data = await response.json();
      } catch (jsonErr) {
        console.warn('Non-JSON response from server:', jsonErr);
      }

      if (response && response.ok && data.success) {
        setSubmittedInfo({ ...formData });
        setIsSubmitted(true);
      } else {
        setServerError(data.message || 'Failed to submit consultation request. Please try again.');
      }
    } catch (err) {
      console.error('Consultation request failed:', err);
      setServerError('Unable to connect to the email server. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSubmittedInfo(null);
    setServerError('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      serviceInterest: 'PEB Design & Structural Engineering',
      projectType: 'Industrial Facility / Plant',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="consult-modal-backdrop" onClick={handleClose}>
      <div
        className="consult-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="consult-modal-header">
          <div className="consult-modal-header-badge">
            <LuSparkles className="consult-badge-icon" />
            <span>FREE TECHNICAL CONSULTATION</span>
          </div>
          <button
            type="button"
            className="consult-modal-close-btn"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <LuX />
          </button>
          <h2 className="consult-modal-title">Talk to an Engineering Consultant</h2>
          <p className="consult-modal-subtitle">
            Connect directly with our senior structural & PEB experts to evaluate your design requirements, optimize costs, or plan construction execution.
          </p>
        </div>

        <div className="consult-modal-body">
          {isSubmitted && submittedInfo ? (
            <div className="consult-success-view">
              <div className="consult-success-icon-wrap">
                <CheckCircleIcon className="consult-success-icon" />
              </div>
              <h3 className="consult-success-title">Consultation Requested!</h3>
              <p className="consult-success-msg">
                Thank you, <strong>{submittedInfo.fullName}</strong>. Your inquiry has been sent to our Lead Engineering Consultant. We will review your request and get in touch with you shortly at <span>{submittedInfo.email}</span>.
              </p>
              <div className="consult-success-summary-box">
                <div className="consult-summary-item">
                  <span className="summary-label">Company:</span>
                  <span className="summary-val">{submittedInfo.company}</span>
                </div>
                <div className="consult-summary-item">
                  <span className="summary-label">Service:</span>
                  <span className="summary-val">{submittedInfo.serviceInterest}</span>
                </div>
                <div className="consult-summary-item">
                  <span className="summary-label">Project Scope:</span>
                  <span className="summary-val">{submittedInfo.projectType}</span>
                </div>
                {submittedInfo.phone && (
                  <div className="consult-summary-item">
                    <span className="summary-label">Phone / WhatsApp:</span>
                    <span className="summary-val">{submittedInfo.phone}</span>
                  </div>
                )}
              </div>
              <button
                type="button"
                className="consult-submit-btn consult-btn-done"
                onClick={handleClose}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="consult-form" noValidate>
              <div className="consult-form-grid">
                <div className="consult-field-group">
                  <label className="consult-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <div className={`consult-input-wrap ${errors.fullName ? 'has-error' : ''}`}>
                    <LuUser className="field-icon" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.fullName && <span className="consult-err-text">{errors.fullName}</span>}
                </div>
                <div className="consult-field-group">
                  <label className="consult-label">
                    Business Email <span className="req">*</span>
                  </label>
                  <div className={`consult-input-wrap ${errors.email ? 'has-error' : ''}`}>
                    <LuMail className="field-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <span className="consult-err-text">{errors.email}</span>}
                </div>
                <div className="consult-field-group">
                  <label className="consult-label">
                    Phone / WhatsApp Number <span className="req">*</span>
                  </label>
                  <div className={`consult-input-wrap ${errors.phone ? 'has-error' : ''}`}>
                    <LuPhone className="field-icon" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && <span className="consult-err-text">{errors.phone}</span>}
                </div>
                <div className="consult-field-group">
                  <label className="consult-label">
                    Company / Organization <span className="req">*</span>
                  </label>
                  <div className={`consult-input-wrap ${errors.company ? 'has-error' : ''}`}>
                    <LuBuilding2 className="field-icon" />
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Gargi Infrastructures Ltd"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.company && <span className="consult-err-text">{errors.company}</span>}
                </div>
                <div className="consult-field-group">
                  <label className="consult-label">Engineering Service Needed</label>
                  <div className="consult-input-wrap">
                    <LuWrench className="field-icon" />
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="consult-select"
                    >
                      <option value="PEB Design & Structural Engineering">PEB Design & Structural Engineering</option>
                      <option value="PEB Detailing & Tekla Modelling">PEB Detailing & Tekla Modelling</option>
                      <option value="Civil Design & Construction Consulting">Civil Design & Construction Consulting</option>
                      <option value="Connection Design & Engineering">Connection Design & Engineering</option>
                      <option value="Value Engineering & Material Optimization">Value Engineering & Material Optimization</option>
                      <option value="Material Take-Off & Estimation">Material Take-Off & Estimation</option>
                      <option value="Fabrication & Construction Support">Fabrication & Construction Support</option>
                      <option value="Digital Engineering Services">Digital Engineering Services</option>
                    </select>
                  </div>
                </div>

                {/* Project Category / Scope */}
                <div className="consult-field-group">
                  <label className="consult-label">Project Type / Category</label>
                  <div className="consult-input-wrap">
                    <LuCalendar className="field-icon" />
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="consult-select"
                    >
                      <option value="Industrial Facility / Plant">Industrial Facility / Plant</option>
                      <option value="Warehouse & Logistics Hub">Warehouse & Logistics Hub</option>
                      <option value="Heavy Steel Structure">Heavy Steel Structure</option>
                      <option value="Commercial / Infrastructure Building">Commercial / Infrastructure Building</option>
                      <option value="Renovation / Retrofit Engineering">Renovation / Retrofit Engineering</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message Details */}
              <div className="consult-field-group field-full-width">
                <label className="consult-label">Project Brief & Specific Requirements</label>
                <div className="consult-input-wrap textarea-wrap">
                  <LuMessageSquare className="field-icon textarea-icon" />
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us briefly about building dimensions, crane capacities, location, timeline or any special structural requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="consult-footer">
                <button
                  type="button"
                  className="consult-cancel-btn"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="consult-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="consult-spinner"></span>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      Submit Request <LuSend className="btn-send-icon" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
