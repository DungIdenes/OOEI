Attribute VB_Name = "NewMacros"
Sub Macross()
Attribute Macross.VB_Description = "Help to create tables"
Attribute Macross.VB_ProcData.VB_Invoke_Func = "Normal.NewMacros.Macross"
'
' Macross Macro
' Help to create tables
'
    ActiveDocument.Tables.Add Range:=Selection.Range, NumRows:=5, NumColumns:= _
        5, DefaultTableBehavior:=wdWord9TableBehavior, AutoFitBehavior:= _
        wdAutoFitFixed
    Selection.Tables(1).Select
    Selection.SelectCell
    Selection.ParagraphFormat.Alignment = wdAlignParagraphCenter
    Selection.Cells.VerticalAlignment = wdCellAlignVerticalCenter
End Sub

