import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError 

from .models import Card


class CardType(DjangoObjectType):
    class Meta:
        model = Card


class Query(graphene.ObjectType):
    cards = graphene.List(CardType)

    def resolve_cards(self, info):
        return Card.objects.filter(used=False)


class CreateCard(graphene.Mutation):
    card = graphene.Field(CardType)

    class Arguments:
        name = graphene.String()
        suit = graphene.String()
        color = graphene.String()

    def mutate(self, info, name, suit, color):
        card = Card(name=name, suit=suit, color=color)
        card.save()
        return CreateCard(card=card)


class DealHand(graphene.Mutation):
    card1 = graphene.Field(CardType)
    card2 = graphene.Field(CardType)
    card3 = graphene.Field(CardType)
    card4 = graphene.Field(CardType)
    card5 = graphene.Field(CardType)

    class Arguments:
        card1_id = graphene.Int(required=True)
        card2_id = graphene.Int(required=True)
        card3_id = graphene.Int(required=False)
        card4_id = graphene.Int(required=False)
        card5_id = graphene.Int(required=False)

    def mutate(self, info, card1_id, card2_id, card3_id=None, card4_id=None, card5_id=None):
        card1 = Card.objects.get(id=card1_id)
        card1.used = True
        card1.save()

        card2 = Card.objects.get(id=card2_id)
        card2.used = True
        card2.save()

        if card3_id:
            card3 = Card.objects.get(id=card3_id)
            card3.used = True
            card3.save()

        if card4_id:
            card4 = Card.objects.get(id=card4_id)
            card4.used = True
            card4.save()

        if card5_id:
            card5 = Card.objects.get(id=card5_id)
            card5.used = True
            card5.save()

        if card3_id and card4_id and card5_id:
            return DealHand(card1=card1, card2=card2, card3=card3, card4=card4, card5=card5)
        else: 
            return DealHand(card1=card1, card2=card2)


class ResetDeck(graphene.Mutation):
    card = graphene.Field(CardType)

    def mutate(self, info): 
        cards = Card.objects.all().update(used=False, active=False)
        return ResetDeck()


class Mutation(graphene.ObjectType):
    create_card = CreateCard.Field()
    deal_hand = DealHand.Field()
    reset_deck = ResetDeck.Field()