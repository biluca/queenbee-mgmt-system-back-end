CREATE TABLE Appointment (
    uuid UUID PRIMARY KEY,
    customer_uuid UUID NOT NULL,
    type VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    hour VARCHAR(10) NOT NULL,
    status VARCHAR(50) NOT NULL,
    payment_status VARCHAR(50) NOT NULL,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMPTZ
);
