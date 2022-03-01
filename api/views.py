from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .serializers import *

from users.models import Profile
from fiches.models import Fiche
from factures.models import Facture
from devis.models import Devi
from clients.models import Client
from inbox.models import Message
from dashboard.models import Societe

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {'GET': 'api/fiches'},
        {'GET': 'api/fiches/id'},

        {'GET': 'api/factures'},
        {'GET': 'api/factures/id'},

        {'GET': 'api/devis'},
        {'GET': 'api/devis/id'},

        {'GET': 'api/clients'},
        {'GET': 'api/clients/id'},

        {'GET': 'api/societe'},        
    ]

    return Response(routes)

@api_view(['GET'])
def getFiches(request):
    fiches = Fiche.objects.all()
    serializer = FicheSerializer(fiches, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFiche(request, pk):
    fiche = Fiche.objects.get(id=pk)
    serializer = FicheSerializer(fiche, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getFactures(request):
    factures = Facture.objects.all()
    serializer = FactureSerializer(factures, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFacture(request, pk):
    facture = Facture.objects.get(id=pk)
    serializer = FactureSerializer(facture, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getDevis(request):
    devis = Devi.objects.all()
    serializer = DeviSerializer(devis, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getDevi(request, pk):
    devis = Devi.objects.get(id=pk)
    serializer = DeviSerializer(devis, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getClients(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getClient(request, pk):
    client = Client.objects.get(id=pk)
    serializer = ClientSerializer(client, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getCompany(request):
    societe = Societe.objects.get(id=1)
    serializer = SocieteSerializer(societe, many=False)
    return Response(serializer.data)