# Google Sheet Range Validator

Used this script to create a number from a range.

Just pass a range from your sheet and it will return a value corresponding to it.

This is good to compare if two tables are the same.

## Logic behind

If field is a string, it gets its length. 
If the field is a number, gets its value and adds to the sum.

## Usage

This would get a value representing cols A and B
'''
=RangeGetSum(A:B)
'''
