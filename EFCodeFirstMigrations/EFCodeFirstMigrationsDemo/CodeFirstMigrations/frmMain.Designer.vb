<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class frmMain
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.btnCreateDatabase = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'btnCreateDatabase
        '
        Me.btnCreateDatabase.Location = New System.Drawing.Point(40, 61)
        Me.btnCreateDatabase.Name = "btnCreateDatabase"
        Me.btnCreateDatabase.Size = New System.Drawing.Size(138, 26)
        Me.btnCreateDatabase.TabIndex = 0
        Me.btnCreateDatabase.Text = "Create Database"
        Me.btnCreateDatabase.UseVisualStyleBackColor = True
        '
        'frmMain
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(284, 262)
        Me.Controls.Add(Me.btnCreateDatabase)
        Me.Name = "frmMain"
        Me.Text = "Code First App"
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents btnCreateDatabase As System.Windows.Forms.Button

End Class
