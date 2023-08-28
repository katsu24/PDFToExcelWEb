import os
from flask import Flask, render_template, request, send_file
import pandas as pd
import tabula
import openpyxl
from openpyxl import Workbook
from openpyxl.utils.dataframe import dataframe_to_rows
from openpyxl.styles import Alignment

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("upload.html")

@app.route("/upload", methods=["POST"])
def upload():
    pdf_file = request.files["pdf_file"]
    dfs = tabula.read_pdf(pdf_file, lattice=True, pages='all')
    combined_df = pd.concat(dfs, ignore_index=True)
    
    excel_file_path = os.path.join(app.root_path, "output", "result.xlsx")

    workbook = Workbook()
    sheet = workbook.active

    for row in dataframe_to_rows(combined_df, index=False, header=True):
        sheet.append(row)

    # セル内の改行に対して折り返し設定を行う
    for row in sheet.iter_rows(min_row=2, max_row=sheet.max_row, min_col=1, max_col=sheet.max_column):
        for cell in row:
            cell.alignment = Alignment(wrap_text=True)

    # セル幅を調整
    for column in sheet.columns:
        max_length = 0
        column_letter = openpyxl.utils.get_column_letter(column[0].column)
        for cell in column:
            try:
                if len(str(cell.value)) > max_length:
                    max_length = len(cell.value)
            except:
                pass
        adjusted_width = (max_length + 2) * 1.2  # 余白を考慮して調整
        sheet.column_dimensions[column_letter].width = adjusted_width

    # Excelファイルを保存
    workbook.save(excel_file_path)
    
    return send_file(excel_file_path, as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)