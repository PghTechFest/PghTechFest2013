Imports System.Data.Entity
Imports DataAccess


Public Class frmMain

    Private Sub btnCreateDatabase_Click(sender As System.Object, e As System.EventArgs) Handles btnCreateDatabase.Click

        Database.SetInitializer(Of TransportationDB)(New DropCreateDatabaseIfModelChanges(Of TransportationDB)())

        Dim context As New TransportationDB()
        Dim SUVType As New VehicleType()

        SUVType.Name = "SUV"
        SUVType.Description = "Sport Utility Vehicle"

        context.VehicleTypes.Add(SUVType)   'Break here
        context.SaveChanges()

        Dim TrailBlazer As New Vehicle()
        TrailBlazer.Make = "Chevrolet"
        TrailBlazer.Model = "TrailBlazer"
        TrailBlazer.VehicleType = context.VehicleTypes.First(Function(vt) vt.Name = "SUV")

        context.Vehicles.Add(TrailBlazer)
        context.SaveChanges()
    End Sub

End Class
