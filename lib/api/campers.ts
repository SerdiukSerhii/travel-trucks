import {
  AvailableFilters,
  BookingRequest,
  BookingResponse,
  CamperDetails,
  CamperQueryParams,
  CampersResponse,
  Review,
} from '@/types/camper';
import { api } from './axios';

export const getCampers = async (params?: CamperQueryParams): Promise<CampersResponse> => {
  const { data } = await api.get<CampersResponse>('/campers', { params });

  return data;
};

export const getAvailableFilters = async (): Promise<AvailableFilters> => {
  const { data } = await api.get<AvailableFilters>('/campers/filters');

  return data;
};

export const getCamperById = async (camperId: string): Promise<CamperDetails> => {
  const { data } = await api.get<CamperDetails>(`/campers/${camperId}`);

  return data;
};

export const getCamperReviews = async (camperId: string): Promise<Review[]> => {
  const { data } = await api.get<Review[]>(`/campers/${camperId}/reviews`);

  return data;
};

export const createBookingRequest = async (
  camperId: string,
  bookingData: BookingRequest
): Promise<BookingResponse> => {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    bookingData
  );

  return data;
};
