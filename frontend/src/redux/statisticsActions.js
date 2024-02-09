import { setStatistics } from './statisticsSlice';
import { fetchStatistics } from '../services/api';

export const fetchStatisticsAsync = () => async (dispatch) => {
  try {
    const response = await fetchStatistics();
    dispatch(setStatistics(response.data));
  } catch (error) {
    console.error('Failed to fetch statistics:', error);
  }
};