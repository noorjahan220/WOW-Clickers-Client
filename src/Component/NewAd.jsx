import React, { useState } from 'react';
import { Upload, User, Mail, FileText, MessageSquare, AlertTriangle, Star, Sparkles } from 'lucide-react';
const CLOUD_NAME = "dnniqox8m";
const UPLOAD_PRESET = "your_unsigned_upload_preset";

const NewAdForm = () => {
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
            cloudinaryData.append('upload_preset', UPLOAD_PRESET);

            try {
                const res = await fetch(
                    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                    {
                        method: 'POST',
                        body: cloudinaryData,
                    }
                );

                const data = await res.json();
                if (data.secure_url) {
                    uploadedImageURL = data.secure_url;
                    console.log("Uploaded Image URL:", uploadedImageURL);
                } else {
                    console.error('Upload failed:', data);
                    setIsSubmitting(false);
                    return;
                }
            } catch (error) {
                console.error('Cloudinary upload error:', error);
                setIsSubmitting(false);
                return;
            }
        }

        const finalData = {
            ...formData,
            image: uploadedImageURL || null,
        };

        console.log('Form submitted:', finalData);

        // Simulate submission or send finalData to your backend
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Reset form
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
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
                        <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Submit Your Ad
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Create something amazing. Share your story with the world.
                    </p>
                </div>

                {/* Main Form */}
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                    <div className="p-8">
                        <div className="space-y-8">
                            {/* Personal Info Section */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                    <User className="w-5 h-5 text-indigo-600" />
                                    Personal Information
                                </h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                                        <div className="relative group">
                                            <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'name' ? 'text-indigo-600' : 'text-gray-400'}`} />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField('')}
                                                placeholder="Enter your full name"
                                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <div className="relative group">
                                            <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'email' ? 'text-indigo-600' : 'text-gray-400'}`} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField('')}
                                                placeholder="your.email@example.com"
                                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ad Content Section */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-indigo-600" />
                                    Ad Content
                                </h3>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField('')}
                                            placeholder="What's your ad about?"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField('')}
                                            placeholder="Tell your story... What makes your ad special?"
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none bg-white/50 backdrop-blur-sm"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Priority Level</label>
                                        <div className="relative">
                                            <select
                                                name="priority"
                                                value={formData.priority}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer bg-white/50 backdrop-blur-sm ${formData.priority ? getPriorityColor(formData.priority) : ''}`}
                                                required
                                            >
                                                <option value="">Select priority level</option>
                                                <option value="High">🔴 High Priority</option>
                                                <option value="Medium">🟡 Medium Priority</option>
                                                <option value="Low">🟢 Low Priority</option>
                                            </select>
                                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                {formData.priority ? getPriorityIcon(formData.priority) : (
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Upload Section */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                    <Upload className="w-5 h-5 text-indigo-600" />
                                    Visual Content
                                </h3>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            required
                                        />
                                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-500 hover:bg-indigo-50/50 transition-all duration-200 group">
                                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4 group-hover:text-indigo-500 transition-colors duration-200" />
                                            <p className="text-lg font-medium text-gray-700 mb-2">
                                                {preview ? 'Change Image' : 'Upload Your Image'}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Drag and drop or click to browse. PNG, JPG up to 10MB.
                                            </p>
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
                                                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                            <div className="bg-white rounded-xl p-4 shadow-lg">
                                                <p className="text-sm font-medium text-gray-700 mb-3">Image Preview:</p>
                                                <img
                                                    src={preview}
                                                    alt="Preview"
                                                    className="w-full h-48 object-cover rounded-lg shadow-md"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    onClick={onSubmit}
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Submitting Your Ad...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2">
                                            <Sparkles className="w-5 h-5" />
                                            Submit Your Ad
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        Your ad will be reviewed within 24 hours. We'll notify you via email.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewAdForm;