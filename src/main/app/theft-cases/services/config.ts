export const TheftCasesServiceConfig = {
    getAll: '/v3/search',
    getDataCount: '/v3/search/count',
    getDataById: (id: number) => `/v3/bikes/${id}`
}
