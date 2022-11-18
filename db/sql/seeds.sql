USE store_db;

INSERT INTO department
VALUES  (1, "A"), (2, "B"), (3, "C");

INSERT INTO role
VALUES (1, 'a-1', 10500.50, 1), 
       (2, 'a-2', 11500.50, 1), 
       (3, 'a-3', 12500.50, 1), 
       (4, 'b-1', 13900.30, 2),
       (5, 'b-2', 15000.00, 2),
       (6, 'c-1', 25000.00, 3);

INSERT INTO employee 
VALUES (1, 'Vin', 'Cuffe', 1, NULL),
       (2, 'Amata', 'Voller', 2, 1),
       (3, 'Gaston', 'Mitchelson', 3, 2),
       (4, 'Ibrahim', 'Skylett', 4, 3),
       (5, 'Mag', 'Forshaw', 5, 4),
       (6, 'Ransom', 'Heningham', NULL, NULL);
       