export class Formatter {
    static formatCurrency(value: number): string {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    }
    static formatDate(date: Date) {
        return new Intl.DateTimeFormat('es-ES').format(date);
    }
}
