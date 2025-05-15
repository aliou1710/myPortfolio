import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private readonly DEFAULT_CACHE_TIME = 5 * 60 * 1000; // 5 minutes

  set(
    key: string,
    data: any,
    expirationTime: number = this.DEFAULT_CACHE_TIME
  ): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now() + expirationTime,
    });
  }

  get(key: string): any {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.timestamp) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }

  remove(key: string): void {
    this.cache.delete(key);
  }
}
