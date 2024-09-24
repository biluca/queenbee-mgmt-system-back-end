CREATE TABLE Finance (
    uuid UUID PRIMARY KEY,
    item VARCHAR(255) NOT NULL,
    value NUMERIC(15, 2) NOT NULL,
    payment_type VARCHAR(100) NOT NULL,
    finance_type VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    payment_date DATE NOT NULL,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    notes TEXT,
    updatedAt TIMESTAMPTZ
);
