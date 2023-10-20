function transformData(data) {
    return data && !data.id
        ? Object.keys(data).map((key) => ({
            ...data[key]
        }))
        : data;
};

export default transformData;
