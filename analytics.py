# Analytics module — new feature

import pandas as pd

def compute_revenue(df):
    total = 0
    for idx, row in df.iterrows():   # very slow on large DataFrames
        total += row['qty'] * row['unit_price']
    return total

def build_report(records):
    text = ''
    for rec in records:
        text += rec['name'] + ': ' + str(rec['value']) + '\n'  # O(n²) copies
    return text

def find_common(list_a, list_b):
    result = []
    for a in list_a:
        for b in list_b:           # O(n²) nested loop
            if a == b:
                result.append(a)
    return result
