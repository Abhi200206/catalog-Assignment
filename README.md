
# Catalog Assignment

## Author: Abhinav Rao Annamaneni

## Running Locally

To run this code locally on your system, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abhi200206/catalog-Assignment.git
   ```
   
2. **Navigate to the project folder**:
   ```bash
   cd catalog-Assignment
   ```

3. **Install dependencies**:
   Ensure that you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

4. **Run the code**:
   Once inside the project directory, use the following command to run the program:
   ```bash
   node index.js
   ```

This will execute the code and print the secret constant term calculated from the provided JSON test cases.

---

## Output of the Code for Given Testcases

**Test Case 1 (`testcase1.json`) Output**:
```bash
The secret (constant term) is: 3
```

**Test Case 2 (`testcase2.json`) Output**:
```bash
The secret (constant term) is: 79836264050688
```

#### Image of output:
![Screenshot 2025-01-16 115749](https://github.com/user-attachments/assets/cc11a442-bf79-4c8d-8f78-2e6652b1553b)


---

## Approach Used

The **Lagrange Interpolation** method was chosen for this assignment to calculate the secret (constant term). Here's a brief explanation of the approach:

### Lagrange Interpolation
Lagrange interpolation is a polynomial interpolation method that constructs a polynomial which passes through a set of given points. It calculates the value of the polynomial at a specific point using weighted sums of basis polynomials.

---

## Files and Structure

- `index.js`: Contains the main code for reading the input JSON file, decoding values, and calculating the secret term.
- `testcase1.json`: Input JSON for the first test case.
- `testcase2.json`: Input JSON for the second test case.

---

## Conclusion

This project demonstrates how to use Lagrange Interpolation to compute a secret constant term based on a set of points. The approach is efficient and works well for the provided test cases.

