import React, { useState } from 'react';
import {
  Upload,
  User,
  Mail,
  MessageSquare,
  AlertTriangle,
  Star,
  Sparkles,
  Ticket
} from 'lucide-react';

const NewTicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: ''
  });
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let uploadedImageURL = '';

    if (imageFile) {
      const cloudinaryData = new FormData();
      cloudinaryData.append('file', imageFile);
      cloudinaryData.append('upload_preset', 'ticket_upload');
      cloudinaryData.append('cloud_name', 'dnniqox8m');

      try {
        const res = await fetch('https://api.cloudinary.com/v1_1/dnniqox8m/image/upload', {
          method: 'POST',
          body: cloudinaryData
        });
        const data = await res.json();
        if (data.secure_url) {
          uploadedImageURL = data.secure_url;
          console.log('Image uploaded to Cloudinary:', uploadedImageURL);
        } else {
          console.error('Upload failed:', data);
          setIsSubmitting(false);
          return;
        }
      } catch (error) {
        console.error('Cloudinary Error:', error);
        setIsSubmitting(false);
        return;
      }
    }

    const finalData = {
      ...formData,
      adBanner: uploadedImageURL || null
    };

    console.log('Ticket submitted:', finalData);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: ''
    });
    setPreview(null);
    setImageFile(null);
    setIsSubmitting(false);
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'High': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'Medium': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'Low': return <Sparkles className="w-4 h-4 text-green-500" />;
      default: return null;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'border-red-500 bg-red-50';
      case 'Medium': return 'border-yellow-500 bg-yellow-50';
      case 'Low': return 'border-green-500 bg-green-50';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6 shadow-lg">
            <Ticket className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            New Ticket
          </h1>
          <p className="text-blue-600 text-lg">
            Need help? Create a support ticket and we'll get back to you.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden">
          <form onSubmit={onSubmit} className="p-8 space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-600" />
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField === 'name' ? 'text-cyan-600' : 'text-blue-300'}`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Noorjahan Akter Meem"
                      className="w-full pl-11 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-cyan-400 bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField === 'email' ? 'text-cyan-600' : 'text-blue-300'}`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="noorjahanmeem220@gmail.com"
                      className="w-full pl-11 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-cyan-400 bg-white"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Ticket Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-600" />
                Ticket Details
              </h3>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-cyan-400 bg-white"
                  required
                />
              </div>

              {/* Priority */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-700">
                  Priority <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-cyan-400 bg-white appearance-none ${formData.priority ? getPriorityColor(formData.priority) : ''}`}
                    required
                  >
                    <option value="">Select priority</option>
                    <option value="High">🔴 High Priority</option>
                    <option value="Medium">🟡 Medium Priority</option>
                    <option value="Low">🟢 Low Priority</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    {formData.priority ? getPriorityIcon(formData.priority) : (
                      <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Describe your issue or question in detail..."
                  rows={5}
                  className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-cyan-400 resize-none bg-white"
                  required
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-700 flex items-center gap-2">
                <Upload className="w-5 h-5 text-cyan-600" />
                Ad Banner (500x250)
              </h3>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-cyan-500 hover:bg-cyan-50 transition">
                  <Upload className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                  <p className="text-sm text-blue-300">Choose banner image (500x250px recommended)</p>
                </div>
              </div>

              {preview && (
                <div className="relative group">
                  <div className="absolute top-2 right-2 z-20">
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null);
                        setImageFile(null);
                      }}
                      className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <p className="text-sm font-medium text-blue-700 mb-3">Banner Preview:</p>
                    <div className="w-full h-32 bg-blue-50 rounded-lg overflow-hidden">
                      <img
                        src={preview}
                        alt="Banner Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-blue-400 mt-2">Recommended size: 500x250px</p>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:ring-cyan-300 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting Ticket...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Ticket className="w-5 h-5" />
                    Submit
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-blue-600">
            We typically respond to support tickets within 24 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewTicketForm;
