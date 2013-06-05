Imports System.Data.Entity
Imports System.ComponentModel.DataAnnotations
Imports System.Drawing

'*** Note: This is the "DataAccess" Namespace ***

#Region "Table Classes"
'************************************************************************************************
'Classes describing individual table structure for each table identified in the context database
'************************************************************************************************

<Table("VehicleTable")>
Public Class Vehicle
    Public Property VehicleId() As Int32
    <Column("MakeOfCar")>
    Public Property Make() As String
    Public Property Model() As String
    Public Property VehicleType() As VehicleType
    'Public Property VIN() As String            'New Property Added
    'Public Property LicensePlate() As String   'New Property Added
End Class

Public Class VehicleType
    Public Property VehicleTypeId() As Int32
    Public Property Name() As String
    Public Property Description() As String
    'Public Property NumberOfAxles As Int32     'New Property Added
End Class

#End Region


#Region "Context Class"
'*******************************************************
'Context class describing Database and its tables
'*******************************************************
Public Class TransportationDB
    Inherits DbContext

    Public Property Vehicles() As DbSet(Of Vehicle)
    Public Property VehicleTypes() As DbSet(Of VehicleType)

End Class

#End Region