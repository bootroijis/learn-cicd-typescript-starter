import { describe, test, expect } from 'vitest';
import { getAPIKey } from '../api/auth.js';
import { IncomingHttpHeaders } from "http";

const header1: IncomingHttpHeaders = {
    'authorization': 'ApiKey 1234'
};

describe('getAPIKey', () => {
    test("should return API key from headers", () => {
        const apiKey = getAPIKey(header1)
        expect(apiKey).toBe('1234');
    })
});