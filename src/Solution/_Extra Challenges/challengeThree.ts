// As a distributor, SupplyHouse receives daily inventory feeds from our suppliers and needs to extract data to store
// in our supplier inventory table. We want to have an automated job, scheduled daily, that processes each supplier
// file from a common directory and inserts into/updates table SUPPLIER_PRODUCT.

// Table  SUPPLIER_PRODUCT

//     Column             Notes
//     SUPPLIER_ID *      Primary key is (SUPPLIER_ID, PRODUCT_ID)
//     PRODUCT_ID *
//     QUANTITY

// The feeds are different for each supplier, and the type can be either tab-delimited text, CSV, or Excel files. They are
// transferred to the same directory on our server with standardized names (<supplierID>.extension). Some
// suppliers may have extra columns in the feed, but they all guarantee to provide one column containing the product
// ID and one column containing the quantity (whose column indices can vary from supplier to supplier). Each
// product ID appears only once in a file.
// Sample supplier feeds:

// - Supplier A (CSV):
// Product,Price,Quantity,LastUpdated

// DEFG,40.17,2,2013-10-02
// ABC,10.30,15,2014-11-26
// HIJ,152.45,53,2014-02-17

// - Supplier B (tab-delimited):
// row_number product brand inventory
// 1 KLMN Honeywell 34
// 2 HIJ Taco 452
// 3 OPQ Panasonic 77
// 4 ABC Taco 10

// Design the Java/typescript classes, their member variables and methods signatures to support this automation project, with a
// focus on how to handle different file types and formats. Feel free to use supporting database tables if necessary
// (specify columns, primary keys, foreign keys). As with Question 1, please include any assumptions you make.
// Deliverables:
// - Java files with class skeletons, and sufficient in-file documentation. Don't implement any method, as we are only
// interested in how you design data structures.
// - A document file (text, Word, PDF, or any format that we can likely open) describing the database schema, if you
// use tables.

// Class to represent a Supplier Product
class SupplierProduct {
    supplierId: string;
    productId: string;
    quantity: number;

    constructor(supplierId: string, productId: string, quantity: number) {
        this.supplierId = supplierId;
        this.productId = productId;
        this.quantity = quantity;
    }
}

// Class to represent a generic Supplier File
abstract class SupplierFileProcessor {
    abstract processFile(filePath: string): SupplierProduct[];
}

// Class to process CSV files
class CsvFileProcessor extends SupplierFileProcessor {
    processFile(filePath: string): SupplierProduct[] {
        // Implementation to read and parse CSV file
        // Extract product ID and quantity information
        // Return a list of SupplierProduct objects
        return [];
    }
}

// Class to process Tab-Delimited files
class TabDelimitedFileProcessor extends SupplierFileProcessor {
    processFile(filePath: string): SupplierProduct[] {
        // Implementation to read and parse Tab-Delimited file
        // Extract product ID and quantity information
        // Return a list of SupplierProduct objects
        return [];
    }
}

// Class to process Excel files
class ExcelFileProcessor extends SupplierFileProcessor {
    processFile(filePath: string): SupplierProduct[] {
        // Implementation to read and parse Excel file
        // Extract product ID and quantity information
        // Return a list of SupplierProduct objects
        return [];
    }
}

// Database table representation
export class SUPPLIER_PRODUCT {
    SUPPLIER_ID: string;
    PRODUCT_ID: string;
    QUANTITY: number;

    // Add other necessary fields if needed
    // ...

    constructor(supplierId: string, productId: string, quantity: number) {
        this.SUPPLIER_ID = supplierId;
        this.PRODUCT_ID = productId;
        this.QUANTITY = quantity;
    }
}

// Assumptions:
// - Database connection details, error handling, and other non-core functionalities are not detailed here for simplicity.

// Documentation:
// - CsvFileProcessor, TabDelimitedFileProcessor, and ExcelFileProcessor classes are responsible for processing specific file types.
// - SUPPLIER_PRODUCT class represents the structure of the database table.
// - SupplierFileProcessor is an abstract class to provide a common interface for file processors.
// - The processFile method in each file processor class is responsible for extracting supplier product information from the respective file type.