export const amountValueFormatter = (params) => {
    const { value } = params;
    if (!value) {
        return;
    }
    return '$' + value;
};
