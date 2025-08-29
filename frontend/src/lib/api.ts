import axios, { AxiosInstance } from 'axios';

const API_URL = 'http://localhost:8000/targetcomplex'; // Adjust to your backend URL

export interface ProductResponse {
  _id: string;
  name: string;
  description: string;
  price: number;
  ageGroup: string;
  categoryId: { _id: string; name: string };
  pageId: { _id: string; name: string };
  imageUrl: string;
}

export interface NewsResponse {
  _id: string;
  title: string;
  company: string;
  image: string;
  video: string;
}

export interface PageResponse {
  _id: string;
  name: string;
}

export interface CategoryResponse {
  _id: string;
  name: string;
  pageId: { _id: string; name: string };
}

export class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getAllProducts() {
    try {
      const response = await this.api.get<ProductResponse[]>('/products');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getProductsByCategory(categoryId: string) {
    try {
      const response = await this.api.get<ProductResponse[]>(`/products/category/${categoryId}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getAllNews() {
    try {
      const response = await this.api.get<NewsResponse[]>('/news');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getAllPages() {
    try {
      const response = await this.api.get<PageResponse[]>('/pages');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getAllCategories() {
    try {
      const response = await this.api.get<CategoryResponse[]>('/categories');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any) {
    if (axios.isAxiosError(error) && error.response) {
      return new Error(error.response.data.message || 'Failed to fetch data');
    }
    return new Error('An unexpected error occurred');
  }
}

export const apiService = new ApiService();