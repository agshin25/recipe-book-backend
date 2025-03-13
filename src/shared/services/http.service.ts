import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

@Injectable()
export class HttpService {
    private readonly axiosInstance: AxiosInstance;
    constructor(private configService: ConfigService){
        this.axiosInstance = axios.create({
            baseURL: this.configService.get<string>("API_BASE_URL"),
            timeout: 1000,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }


    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url, config)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const status = error.response?.status;
                const message = error.response?.data?.message || error.message;

                console.error(`HTTP Error: ${status} - ${message}`);

                throw new Error(`Failed to fetch data: ${message}`);
            }
            throw error;
        }
    }


}