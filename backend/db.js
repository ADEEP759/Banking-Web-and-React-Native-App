module.exports = {
  customers: [
    { id: "1", name: "Johnathan Doe", email: "john.doe@example.com" },
    { id: "2", name: "Jane Smith", email: "jane.smith@example.com" },
    { id: "3", name: "Carlos Rivera", email: "carlos.rivera@example.com" },
    { id: "4", name: "Mei Lin", email: "mei.lin@example.com" },
    { id: "5", name: "Aarav Patel", email: "aarav.patel@example.com" },
    { id: "6", name: "Fatima Noor", email: "fatima.noor@example.com" },
    { id: "7", name: "Liam Johnson", email: "liam.johnson@example.com" },
    { id: "8", name: "Emily Davis", email: "emily.davis@example.com" },
    { id: "9", name: "Noah Kim", email: "noah.kim@example.com" },
    { id: "10", name: "Sophia Zhang", email: "sophia.zhang@example.com" },
    { id: "11", name: "Ethan Brown", email: "ethan.brown@example.com" },
    { id: "12", name: "Olivia Martin", email: "olivia.martin@example.com" },
    { id: "13", name: "Isabella Wilson", email: "isabella.wilson@example.com" },
    { id: "14", name: "Lucas Lee", email: "lucas.lee@example.com" },
    { id: "15", name: "Mia Thompson", email: "mia.thompson@example.com" },
    { id: "16", name: "William Clark", email: "william.clark@example.com" },
    { id: "17", name: "Charlotte Scott", email: "charlotte.scott@example.com" },
    { id: "18", name: "Benjamin Hall", email: "benjamin.hall@example.com" },
    { id: "19", name: "Amelia Lewis", email: "amelia.lewis@example.com" },
    { id: "20", name: "James Young", email: "james.young@example.com" }
  ],

  accounts: [
    { id: "1", customerId: "1", accountNumber: "1002003001", balance: 7450.75, currency: "USD" },
    { id: "2", customerId: "1", accountNumber: "1002003002", balance: 2300.00, currency: "USD" },
    { id: "3", customerId: "2", accountNumber: "1002003003", balance: 12890.00, currency: "USD" },
    { id: "4", customerId: "3", accountNumber: "1002003004", balance: 3040.25, currency: "EUR" },
    { id: "5", customerId: "4", accountNumber: "1002003005", balance: 9800.00, currency: "USD" },
    { id: "6", customerId: "5", accountNumber: "1002003006", balance: 15100.65, currency: "INR" },
    { id: "7", customerId: "6", accountNumber: "1002003007", balance: 5100.50, currency: "AED" },
    { id: "8", customerId: "7", accountNumber: "1002003008", balance: 10850.25, currency: "USD" },
    { id: "9", customerId: "8", accountNumber: "1002003009", balance: 6400.80, currency: "GBP" },
    { id: "10", customerId: "9", accountNumber: "1002003010", balance: 3200.00, currency: "KRW" },
    { id: "11", customerId: "10", accountNumber: "1002003011", balance: 4500.00, currency: "USD" },
    { id: "12", customerId: "11", accountNumber: "1002003012", balance: 8900.45, currency: "USD" },
    { id: "13", customerId: "12", accountNumber: "1002003013", balance: 3100.75, currency: "USD" },
    { id: "14", customerId: "13", accountNumber: "1002003014", balance: 980.00, currency: "USD" },
    { id: "15", customerId: "14", accountNumber: "1002003015", balance: 13200.00, currency: "EUR" },
    { id: "16", customerId: "15", accountNumber: "1002003016", balance: 2650.30, currency: "USD" },
    { id: "17", customerId: "16", accountNumber: "1002003017", balance: 7200.00, currency: "USD" },
    { id: "18", customerId: "17", accountNumber: "1002003018", balance: 5550.55, currency: "USD" },
    { id: "19", customerId: "18", accountNumber: "1002003019", balance: 450.00, currency: "USD" },
    { id: "20", customerId: "19", accountNumber: "1002003020", balance: 11000.90, currency: "CAD" },
    { id: "21", customerId: "20", accountNumber: "1002003021", balance: 9050.65, currency: "USD" }
  ],

  transactions: [
    // Customer 1 (Johnathan Doe) - Account 1 (6 transactions)
    { id: "1", accountId: "1", type: "CREDIT", amount: 2000.00, description: "Salary", date: "2023-10-01T08:00:00Z" },
    { id: "2", accountId: "1", type: "DEBIT", amount: 150.00, description: "Electricity Bill", date: "2023-10-05T14:00:00Z" },
    { id: "24", accountId: "1", type: "DEBIT", amount: 75.50, description: "Netflix Subscription", date: "2023-10-07T09:15:00Z" },
    { id: "25", accountId: "1", type: "CREDIT", amount: 300.00, description: "Freelance Work", date: "2023-10-10T11:30:00Z" },
    { id: "26", accountId: "1", type: "DEBIT", amount: 45.00, description: "Spotify Subscription", date: "2023-10-12T07:45:00Z" },
    { id: "27", accountId: "1", type: "DEBIT", amount: 120.00, description: "Grocery Shopping", date: "2023-10-15T18:20:00Z" },
    
    // Customer 1 (Johnathan Doe) - Account 2 (7 transactions)
    { id: "3", accountId: "2", type: "CREDIT", amount: 1200.00, description: "Tax Refund", date: "2023-10-10T18:30:00Z" },
    { id: "28", accountId: "2", type: "DEBIT", amount: 200.00, description: "Credit Card Payment", date: "2023-10-02T12:00:00Z" },
    { id: "29", accountId: "2", type: "DEBIT", amount: 50.00, description: "Phone Bill", date: "2023-10-04T13:15:00Z" },
    { id: "30", accountId: "2", type: "CREDIT", amount: 500.00, description: "Bonus", date: "2023-10-08T10:45:00Z" },
    { id: "31", accountId: "2", type: "DEBIT", amount: 80.00, description: "Dining Out", date: "2023-10-11T19:30:00Z" },
    { id: "32", accountId: "2", type: "CREDIT", amount: 150.00, description: "Cashback", date: "2023-10-14T08:10:00Z" },
    { id: "33", accountId: "2", type: "DEBIT", amount: 100.00, description: "Uber Rides", date: "2023-10-16T17:45:00Z" },
    
    // Customer 2 (Jane Smith) - Account 3 (8 transactions)
    { id: "4", accountId: "3", type: "CREDIT", amount: 5000.00, description: "Bonus", date: "2023-10-03T09:15:00Z" },
    { id: "34", accountId: "3", type: "DEBIT", amount: 1200.00, description: "Mortgage Payment", date: "2023-10-05T10:00:00Z" },
    { id: "35", accountId: "3", type: "CREDIT", amount: 3500.00, description: "Salary", date: "2023-10-07T08:30:00Z" },
    { id: "36", accountId: "3", type: "DEBIT", amount: 250.00, description: "Car Insurance", date: "2023-10-09T14:15:00Z" },
    { id: "37", accountId: "3", type: "DEBIT", amount: 80.00, description: "Gym Membership", date: "2023-10-11T16:45:00Z" },
    { id: "38", accountId: "3", type: "CREDIT", amount: 200.00, description: "Dividend", date: "2023-10-13T11:20:00Z" },
    { id: "39", accountId: "3", type: "DEBIT", amount: 150.00, description: "Charity Donation", date: "2023-10-15T09:10:00Z" },
    { id: "40", accountId: "3", type: "DEBIT", amount: 300.00, description: "Shopping", date: "2023-10-17T13:25:00Z" },
    
    // Customer 3 (Carlos Rivera) - Account 4 (6 transactions)
    { id: "5", accountId: "4", type: "CREDIT", amount: 2500.00, description: "Freelance Project", date: "2023-10-02T10:00:00Z" },
    { id: "41", accountId: "4", type: "DEBIT", amount: 400.00, description: "Rent Payment", date: "2023-10-04T12:00:00Z" },
    { id: "42", accountId: "4", type: "CREDIT", amount: 1200.00, description: "Consulting Fee", date: "2023-10-06T15:30:00Z" },
    { id: "43", accountId: "4", type: "DEBIT", amount: 150.00, description: "Internet Bill", date: "2023-10-08T11:45:00Z" },
    { id: "44", accountId: "4", type: "DEBIT", amount: 60.00, description: "Mobile Bill", date: "2023-10-10T14:20:00Z" },
    { id: "45", accountId: "4", type: "CREDIT", amount: 800.00, description: "Project Milestone", date: "2023-10-12T10:15:00Z" },
    
    // Customer 4 (Mei Lin) - Account 5 (7 transactions)
    { id: "6", accountId: "5", type: "DEBIT", amount: 300.00, description: "Travel Expense", date: "2023-10-06T13:30:00Z" },
    { id: "46", accountId: "5", type: "CREDIT", amount: 4500.00, description: "Salary", date: "2023-10-01T09:00:00Z" },
    { id: "47", accountId: "5", type: "DEBIT", amount: 200.00, description: "Student Loan", date: "2023-10-03T10:30:00Z" },
    { id: "48", accountId: "5", type: "CREDIT", amount: 300.00, description: "Freelance Work", date: "2023-10-05T14:45:00Z" },
    { id: "49", accountId: "5", type: "DEBIT", amount: 150.00, description: "Shopping", date: "2023-10-08T16:20:00Z" },
    { id: "50", accountId: "5", type: "CREDIT", amount: 1000.00, description: "Bonus", date: "2023-10-10T11:10:00Z" },
    { id: "51", accountId: "5", type: "DEBIT", amount: 50.00, description: "Coffee Shop", date: "2023-10-12T08:45:00Z" },
    
    // Customer 5 (Aarav Patel) - Account 6 (8 transactions)
    { id: "7", accountId: "6", type: "CREDIT", amount: 10000.00, description: "Stock Dividend", date: "2023-10-01T07:00:00Z" },
    { id: "8", accountId: "6", type: "DEBIT", amount: 500.00, description: "Recharge", date: "2023-10-04T17:00:00Z" },
    { id: "52", accountId: "6", type: "DEBIT", amount: 1000.00, description: "Home Loan EMI", date: "2023-10-06T10:00:00Z" },
    { id: "53", accountId: "6", type: "CREDIT", amount: 2500.00, description: "Freelance Payment", date: "2023-10-08T12:30:00Z" },
    { id: "54", accountId: "6", type: "DEBIT", amount: 300.00, description: "Shopping", date: "2023-10-10T15:45:00Z" },
    { id: "55", accountId: "6", type: "CREDIT", amount: 1500.00, description: "Consulting Fee", date: "2023-10-12T11:20:00Z" },
    { id: "56", accountId: "6", type: "DEBIT", amount: 200.00, description: "Dining Out", date: "2023-10-14T19:30:00Z" },
    { id: "57", accountId: "6", type: "DEBIT", amount: 100.00, description: "Movie Tickets", date: "2023-10-16T20:15:00Z" },
    
    // Customer 6 (Fatima Noor) - Account 7 (6 transactions)
    { id: "9", accountId: "7", type: "CREDIT", amount: 3300.00, description: "Salary", date: "2023-10-09T12:00:00Z" },
    { id: "58", accountId: "7", type: "DEBIT", amount: 500.00, description: "Rent", date: "2023-10-02T09:00:00Z" },
    { id: "59", accountId: "7", type: "CREDIT", amount: 200.00, description: "Cashback", date: "2023-10-04T08:30:00Z" },
    { id: "60", accountId: "7", type: "DEBIT", amount: 150.00, description: "Groceries", date: "2023-10-07T17:45:00Z" },
    { id: "61", accountId: "7", type: "CREDIT", amount: 1000.00, description: "Freelance Work", date: "2023-10-11T14:20:00Z" },
    { id: "62", accountId: "7", type: "DEBIT", amount: 200.00, description: "Shopping", date: "2023-10-14T16:30:00Z" },
    
    // Customer 7 (Liam Johnson) - Account 8 (7 transactions)
    { id: "10", accountId: "8", type: "DEBIT", amount: 900.00, description: "Rent", date: "2023-10-08T10:30:00Z" },
    { id: "63", accountId: "8", type: "CREDIT", amount: 5000.00, description: "Salary", date: "2023-10-01T08:00:00Z" },
    { id: "64", accountId: "8", type: "DEBIT", amount: 200.00, description: "Utilities", date: "2023-10-03T12:45:00Z" },
    { id: "65", accountId: "8", type: "CREDIT", amount: 300.00, description: "Bonus", date: "2023-10-05T14:30:00Z" },
    { id: "66", accountId: "8", type: "DEBIT", amount: 150.00, description: "Phone Bill", date: "2023-10-07T11:15:00Z" },
    { id: "67", accountId: "8", type: "DEBIT", amount: 100.00, description: "Gym Membership", date: "2023-10-10T09:45:00Z" },
    { id: "68", accountId: "8", type: "CREDIT", amount: 200.00, description: "Cashback", date: "2023-10-12T08:20:00Z" },
    
    // Customer 8 (Emily Davis) - Account 9 (8 transactions)
    { id: "11", accountId: "9", type: "CREDIT", amount: 2700.00, description: "Project Payment", date: "2023-10-07T11:00:00Z" },
    { id: "69", accountId: "9", type: "DEBIT", amount: 500.00, description: "Mortgage", date: "2023-10-02T10:00:00Z" },
    { id: "70", accountId: "9", type: "CREDIT", amount: 1500.00, description: "Salary", date: "2023-10-04T09:30:00Z" },
    { id: "71", accountId: "9", type: "DEBIT", amount: 200.00, description: "Car Payment", date: "2023-10-06T12:45:00Z" },
    { id: "72", accountId: "9", type: "CREDIT", amount: 300.00, description: "Freelance Work", date: "2023-10-09T14:30:00Z" },
    { id: "73", accountId: "9", type: "DEBIT", amount: 100.00, description: "Internet Bill", date: "2023-10-11T11:15:00Z" },
    { id: "74", accountId: "9", type: "DEBIT", amount: 50.00, description: "Spotify", date: "2023-10-13T08:45:00Z" },
    { id: "75", accountId: "9", type: "CREDIT", amount: 200.00, description: "Dividend", date: "2023-10-15T10:20:00Z" },
    
    // Customer 9 (Noah Kim) - Account 10 (6 transactions)
    { id: "12", accountId: "10", type: "DEBIT", amount: 600.00, description: "Gift Purchase", date: "2023-10-06T16:00:00Z" },
    { id: "76", accountId: "10", type: "CREDIT", amount: 2000.00, description: "Salary", date: "2023-10-01T08:30:00Z" },
    { id: "77", accountId: "10", type: "DEBIT", amount: 300.00, description: "Rent", date: "2023-10-03T10:15:00Z" },
    { id: "78", accountId: "10", type: "CREDIT", amount: 500.00, description: "Freelance Work", date: "2023-10-05T14:45:00Z" },
    { id: "79", accountId: "10", type: "DEBIT", amount: 100.00, description: "Utilities", date: "2023-10-08T12:30:00Z" },
    { id: "80", accountId: "10", type: "DEBIT", amount: 50.00, description: "Coffee", date: "2023-10-10T08:45:00Z" },
    
    // Customer 10 (Sophia Zhang) - Account 11 (7 transactions)
    { id: "13", accountId: "11", type: "CREDIT", amount: 1500.00, description: "Consulting", date: "2023-10-10T14:00:00Z" },
    { id: "81", accountId: "11", type: "DEBIT", amount: 200.00, description: "Shopping", date: "2023-10-02T16:30:00Z" },
    { id: "82", accountId: "11", type: "CREDIT", amount: 3000.00, description: "Salary", date: "2023-10-05T09:00:00Z" },
    { id: "83", accountId: "11", type: "DEBIT", amount: 500.00, description: "Rent", date: "2023-10-07T11:45:00Z" },
    { id: "84", accountId: "11", type: "CREDIT", amount: 200.00, description: "Cashback", date: "2023-10-09T08:30:00Z" },
    { id: "85", accountId: "11", type: "DEBIT", amount: 150.00, description: "Dining Out", date: "2023-10-12T19:15:00Z" },
    { id: "86", accountId: "11", type: "DEBIT", amount: 100.00, description: "Movie Tickets", date: "2023-10-15T20:30:00Z" },
    
    // Customer 11 (Ethan Brown) - Account 12 (8 transactions)
    { id: "14", accountId: "12", type: "CREDIT", amount: 2000.00, description: "Overtime", date: "2023-10-03T18:00:00Z" },
    { id: "87", accountId: "12", type: "DEBIT", amount: 300.00, description: "Shopping", date: "2023-10-01T15:45:00Z" },
    { id: "88", accountId: "12", type: "CREDIT", amount: 3500.00, description: "Salary", date: "2023-10-05T08:30:00Z" },
    { id: "89", accountId: "12", type: "DEBIT", amount: 500.00, description: "Car Payment", date: "2023-10-07T10:15:00Z" },
    { id: "90", accountId: "12", type: "CREDIT", amount: 200.00, description: "Bonus", date: "2023-10-09T12:00:00Z" },
    { id: "91", accountId: "12", type: "DEBIT", amount: 150.00, description: "Phone Bill", date: "2023-10-11T14:45:00Z" },
    { id: "92", accountId: "12", type: "DEBIT", amount: 100.00, description: "Gym Membership", date: "2023-10-13T16:30:00Z" },
    { id: "93", accountId: "12", type: "CREDIT", amount: 300.00, description: "Freelance Work", date: "2023-10-15T11:15:00Z" },
    
    // Customer 12 (Olivia Martin) - Account 13 (6 transactions)
    { id: "15", accountId: "13", type: "DEBIT", amount: 450.00, description: "Shopping", date: "2023-10-02T19:30:00Z" },
    { id: "94", accountId: "13", type: "CREDIT", amount: 2000.00, description: "Salary", date: "2023-10-01T08:00:00Z" },
    { id: "95", accountId: "13", type: "DEBIT", amount: 300.00, description: "Rent", date: "2023-10-03T10:30:00Z" },
    { id: "96", accountId: "13", type: "CREDIT", amount: 500.00, description: "Bonus", date: "2023-10-05T12:45:00Z" },
    { id: "97", accountId: "13", type: "DEBIT", amount: 150.00, description: "Utilities", date: "2023-10-07T14:15:00Z" },
    { id: "98", accountId: "13", type: "DEBIT", amount: 100.00, description: "Dining Out", date: "2023-10-09T18:30:00Z" },
    
    // Customer 13 (Isabella Wilson) - Account 14 (7 transactions)
    { id: "16", accountId: "14", type: "DEBIT", amount: 200.00, description: "Dining Out", date: "2023-10-05T20:00:00Z" },
    { id: "99", accountId: "14", type: "CREDIT", amount: 1500.00, description: "Salary", date: "2023-10-01T09:00:00Z" },
    { id: "100", accountId: "14", type: "DEBIT", amount: 500.00, description: "Rent", date: "2023-10-03T11:45:00Z" },
    { id: "101", accountId: "14", type: "CREDIT", amount: 200.00, description: "Freelance Work", date: "2023-10-06T14:30:00Z" },
    { id: "102", accountId: "14", type: "DEBIT", amount: 100.00, description: "Shopping", date: "2023-10-08T16:15:00Z" },
    { id: "103", accountId: "14", type: "CREDIT", amount: 300.00, description: "Cashback", date: "2023-10-10T08:45:00Z" },
    { id: "104", accountId: "14", type: "DEBIT", amount: 50.00, description: "Coffee", date: "2023-10-12T07:30:00Z" },
    
    // Customer 14 (Lucas Lee) - Account 15 (8 transactions)
    { id: "17", accountId: "15", type: "CREDIT", amount: 6400.00, description: "Crypto Sale", date: "2023-10-11T08:00:00Z" },
    { id: "105", accountId: "15", type: "DEBIT", amount: 500.00, description: "Investment", date: "2023-10-02T10:30:00Z" },
    { id: "106", accountId: "15", type: "CREDIT", amount: 3000.00, description: "Salary", date: "2023-10-05T09:15:00Z" },
    { id: "107", accountId: "15", type: "DEBIT", amount: 200.00, description: "Shopping", date: "2023-10-07T15:45:00Z" },
    { id: "108", accountId: "15", type: "CREDIT", amount: 500.00, description: "Bonus", date: "2023-10-09T12:30:00Z" },
    { id: "109", accountId: "15", type: "DEBIT", amount: 150.00, description: "Dining Out", date: "2023-10-12T19:00:00Z" },
    { id: "110", accountId: "15", type: "DEBIT", amount: 100.00, description: "Movie Tickets", date: "2023-10-14T20:15:00Z" },
    { id: "111", accountId: "15", type: "CREDIT", amount: 200.00, description: "Cashback", date: "2023-10-16T08:45:00Z" },
    
    // Customer 15 (Mia Thompson) - Account 16 (6 transactions)
    { id: "18", accountId: "16", type: "DEBIT", amount: 1200.00, description: "House Maintenance", date: "2023-10-07T09:00:00Z" },
    { id: "112", accountId: "16", type: "CREDIT", amount: 2000.00, description: "Salary", date: "2023-10-01T08:30:00Z" },
    { id: "113", accountId: "16", type: "DEBIT", amount: 300.00, description: "Rent", date: "2023-10-03T11:15:00Z" },
    { id: "114", accountId: "16", type: "CREDIT", amount: 500.00, description: "Freelance Work", date: "2023-10-05T14:45:00Z" },
    { id: "115", accountId: "16", type: "DEBIT", amount: 150.00, description: "Utilities", date: "2023-10-09T13:30:00Z" },
    { id: "116", accountId: "16", type: "DEBIT", amount: 100.00, description: "Shopping", date: "2023-10-11T16:45:00Z" },
    
    // Customer 16 (William Clark) - Account 17 (7 transactions)
    { id: "19", accountId: "17", type: "CREDIT", amount: 3000.00, description: "Tuition Refund", date: "2023-10-04T15:30:00Z" },
    { id: "117", accountId: "17", type: "DEBIT", amount: 500.00, description: "Rent", date: "2023-10-02T10:45:00Z" },
    { id: "118", accountId: "17", type: "CREDIT", amount: 2500.00, description: "Salary", date: "2023-10-05T09:30:00Z" },
    { id: "119", accountId: "17", type: "DEBIT", amount: 200.00, description: "Shopping", date: "2023-10-07T15:15:00Z" },
    { id: "120", accountId: "17", type: "CREDIT", amount: 300.00, description: "Bonus", date: "2023-10-09T12:45:00Z" },
    { id: "121", accountId: "17", type: "DEBIT", amount: 150.00, description: "Dining Out", date: "2023-10-11T19:30:00Z" },
    { id: "122", accountId: "17", type: "DEBIT", amount: 100.00, description: "Movie Tickets", date: "2023-10-13T20:45:00Z" },
    
    // Customer 17 (Charlotte Scott) - Account 18 (8 transactions)
    { id: "20", accountId: "18", type: "DEBIT", amount: 400.00, description: "Fuel", date: "2023-10-03T17:00:00Z" },
    { id: "123", accountId: "18", type: "CREDIT", amount: 3500.00, description: "Salary", date: "2023-10-01T08:15:00Z" },
    { id: "124", accountId: "18", type: "DEBIT", amount: 800.00, description: "Mortgage", date: "2023-10-05T10:30:00Z" },
    { id: "125", accountId: "18", type: "CREDIT", amount: 200.00, description: "Cashback", date: "2023-10-07T08:45:00Z" },
    { id: "126", accountId: "18", type: "DEBIT", amount: 150.00, description: "Shopping", date: "2023-10-09T16:30:00Z" },
    { id: "127", accountId: "18", type: "CREDIT", amount: 300.00, description: "Freelance Work", date: "2023-10-11T14:15:00Z" },
    { id: "128", accountId: "18", type: "DEBIT", amount: 100.00, description: "Utilities", date: "2023-10-13T12:45:00Z" },
    { id: "129", accountId: "18", type: "DEBIT", amount: 50.00, description: "Coffee", date: "2023-10-15T08:30:00Z" },
    
    // Customer 18 (Benjamin Hall) - Account 19 (6 transactions)
    { id: "21", accountId: "19", type: "CREDIT", amount: 500.00, description: "Small Bonus", date: "2023-10-01T08:45:00Z" },
    { id: "130", accountId: "19", type: "DEBIT", amount: 100.00, description: "Shopping", date: "2023-10-03T15:30:00Z" },
    { id: "131", accountId: "19", type: "CREDIT", amount: 1200.00, description: "Salary", date: "2023-10-05T09:45:00Z" },
    { id: "132", accountId: "19", type: "DEBIT", amount: 300.00, description: "Rent", date: "2023-10-07T11:30:00Z" },
    { id: "133", accountId: "19", type: "CREDIT", amount: 200.00, description: "Cashback", date: "2023-10-09T08:15:00Z" },
    { id: "134", accountId: "19", type: "DEBIT", amount: 50.00, description: "Coffee", date: "2023-10-11T07:45:00Z" },
    
    // Customer 19 (Amelia Lewis) - Account 20 (7 transactions)
    { id: "22", accountId: "20", type: "DEBIT", amount: 3000.00, description: "Flight Booking", date: "2023-10-06T06:30:00Z" },
    { id: "135", accountId: "20", type: "CREDIT", amount: 5000.00, description: "Salary", date: "2023-10-01T08:00:00Z" },
    { id: "136", accountId: "20", type: "DEBIT", amount: 800.00, description: "Rent", date: "2023-10-03T10:45:00Z" },
    { id: "137", accountId: "20", type: "CREDIT", amount: 300.00, description: "Bonus", date: "2023-10-05T12:30:00Z" },
    { id: "138", accountId: "20", type: "DEBIT", amount: 200.00, description: "Shopping", date: "2023-10-08T15:15:00Z" },
    { id: "139", accountId: "20", type: "CREDIT", amount: 150.00, description: "Cashback", date: "2023-10-10T09:45:00Z" },
    { id: "140", accountId: "20", type: "DEBIT", amount: 100.00, description: "Dining Out", date: "2023-10-12T19:30:00Z" },
    
    // Customer 20 (James Young) - Account 21 (8 transactions)
    { id: "23", accountId: "21", type: "CREDIT", amount: 9500.00, description: "Loan Disbursement", date: "2023-10-08T10:00:00Z" },
    { id: "141", accountId: "21", type: "DEBIT", amount: 1000.00, description: "Rent", date: "2023-10-02T09:30:00Z" },
    { id: "142", accountId: "21", type: "CREDIT", amount: 3000.00, description: "Salary", date: "2023-10-05T08:15:00Z" },
    { id: "143", accountId: "21", type: "DEBIT", amount: 500.00, description: "Shopping", date: "2023-10-07T16:45:00Z" },
    { id: "144", accountId: "21", type: "CREDIT", amount: 200.00, description: "Bonus", date: "2023-10-09T12:30:00Z" },
    { id: "145", accountId: "21", type: "DEBIT", amount: 150.00, description: "Utilities", date: "2023-10-11T14:15:00Z" },
    { id: "146", accountId: "21", type: "DEBIT", amount: 100.00, description: "Dining Out", date: "2023-10-13T19:45:00Z" },
    { id: "147", accountId: "21", type: "CREDIT", amount: 300.00, description: "Freelance Work", date: "2023-10-15T11:30:00Z" }
  ]
};