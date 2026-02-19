import api from './api';

export const getJobs = async (keyword = '') => {
  try {
    const response = await api.get(`/job/get?keyword=${keyword}`);
    return response.data.jobs || [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

export const getJobById = async (id) => {
  try {
    const response = await api.get(`/job/get/${id}`);
    return response.data.job;
  } catch (error) {
    console.error('Error fetching job:', error);
    return null;
  }
};

export const applyForJob = async (jobId) => {
  try {
    const response = await api.post(`/application/apply/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error applying for job:', error);
    throw error;
  }
};

