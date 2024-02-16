import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './TeacherCourse.css';

const TeacherCourse = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    image: '',
    description: '',
    category: '',
    startDate: '',
    endDate: '',
    content: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (e, index) => {
    const newContent = [...formData.content];
    newContent[index] = e.target.value;
    setFormData({ ...formData, content: newContent });
  };

  const handleAddContent = () => {
    setFormData({ ...formData, content: [...formData.content, ''] });
  };

  const handleRemoveContent = (index) => {
    const newContent = [...formData.content];
    newContent.splice(index, 1);
    setFormData({ ...formData, content: newContent });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5500/courses/addCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add course');
      }

      const data = await response.json();
      console.log('Course added successfully:', data);
      toast.success('Course added successfully!');
      navigate('/courses')

    } catch (error) {
      console.error('Error adding course:', error);
      toast.error('Error adding course. Please try again.');
    }
  };

  return (
    <Fragment>
      <div className="teacher-course-container">
        <h2>Add New Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseName">Course Name</label>
            <input 
              type="text" 
              id="courseName" 
              name="courseName" 
              value={formData.courseName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="instructorName">Instructor Name</label>
            <input 
              type="text" 
              id="instructorName" 
              name="instructorName" 
              value={formData.instructorName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input 
              type="text" 
              id="image" 
              name="image" 
              value={formData.image} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input 
              type="text" 
              id="category" 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input 
              type="date" 
              id="startDate" 
              name="startDate" 
              value={formData.startDate} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input 
              type="date" 
              id="endDate" 
              name="endDate" 
              value={formData.endDate} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            {formData.content.map((item, index) => (
              <div key={index} className="content-item">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleContentChange(e, index)}
                  placeholder="Enter content"
                  required
                />
                <button style={{width:'85px'}} type="button" onClick={() => handleRemoveContent(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddContent}>
              Add Content
            </button>
          </div>
          <button type="submit" className="button-add-course">
            Add Course
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default TeacherCourse;
