![ArtracX](https://artracx.com/wp-content/uploads/2021/06/site_title.png)
# ArtracID DID Method
did : art : <blockchain[1*5]> : <id[40*]>

Technical Paper for W3C DID Registration

## Art Group Limited
[www.artracx.com](https://www.artracx.com)

**Author**

Ming-lam Ng

**Editor**

Daniel Chun

**Advisors**

Paul Cheng, Emil Chan

**Contact**

did_inquiry@artgrouplimited.com

**Date**

26 May 2022

**Version**

Draft copy V0.1



## About ArtracID

“ArtracID” is part of the ARTRACX project developed by Art Group Limited, a member of the Art ID Standard Consortium. 

ARTRACX develops the ArtracID which aims to provide the method and resolver for identifications of art and collectibles. It will also make use of specific hardware devices to hold the security key and to derive the unique DID.

This document specifies the “ArtracID” [DID Method](https://w3c.github.io/did-spec-registries/#did-methods) [**did:art**].


**Highly Secured Key Tag Hardware**

ARTRACX have also been developing a method to decouple the security keys from wallet applications with the use of highly-secured hardware to store private keys which uses the - encrypted NFC data communication with wallet app as DID controller


**ARTRACX Platform**

The [ARTRACX platform](https://www.artracx.com) is a new digital platform that will service  the ecosystem of art collectors, art advisors,  art practitioners, insurers, art galleries, artists and charities by offering provenance, transaction advisory, and valuations. [Art Group Limited](https://www.artgrouplimited.com) is a member of the ART ID STANDARD Consortium and develops its ARTRACX platform to integrate blockchain, chipsets, smart contract, online viewing room and  communications technologies for tapping art provenance, tracking, tracing and trading of art and collectibles online. marketplace/auctions.


## Conformity

This DID method specification conforms to the requirements specified in the DID specification currently published by the W3C Credentials Community Group. For more information about DIDs and DID method specifications, please see DID Primer and DID Specification.

The following DID Method will be registered in the DID Specification Registries (https://w3c.github.io/did-spec-registries/#did-methods).


## Status of This Document

This document was published as an Editor's Draft. Publication as an Editor's Draft does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than a work in progress.


## ArtracID Block Diagram


![Reference only](https://drive.google.com/file/d/1GVFGHtkQi-if_8GnQ5JNP3EIV9gY2ohe/view?usp=sharing)


## ArtracID DID Method

The namestring that shall identify this DID method is : **art**

A DID that uses this method MUST begin with the following prefix: did:art. Per the DID specification, this string MUST be in lowercase. 


**DID Format**

```
ArtracID  =  did: art: method-specific-blockchain-id: method-specific-subject-id 
method-specific-blockchain-id  =  1*5idchar   where idchar = a-z
method-specific-subject-id        =  40*idhex    where idhex = 0-9 / a-f
This generic DID scheme is a URI scheme conformant with [RFC3986](https://www.ietf.org/rfc/rfc3986.txt)

example :
did: art: enq: f045c5c7d50145b65ca2702c38b4e2d46658293c

where
method-specific-blockchain-id refers to [Enecuum](https://enecuum.com/) ENQ blockchain
method-specific-subject-id refers to a string of 40 hexadecimal characters
```

**Method Specific Subject ID Generation**

Take the highly secured key tag hardware as a default contract , method-specific-subject-id should be encoded as follow:

Retrieve the hardware RNG generated public key in the highly secured key tag hardware

Hash the public key and take the first 20 hex digits

Use the multibase format [base16](https://tools.ietf.org/id/draft-multiformats-multibase-00.html#RFC4648) to encode the first 20 digits without the prefix letter of base16 identifier to obtain the method-specific-subject-id in 40 hexadecimal characters.


## ArtracID DID Document
```
     {
        "@context": [
          "https://www.w3.org/ns/did/v1",
          "https://w3c-ccg.github.io/ld-cryptosuite-registry/#ecdsasecp256k1signature2019"
        ],
        "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
        "verificationMethod": [
          {
            "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey",
            "type": "EcdsaSecp256k1VerificationKey2019",
            "controller": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
            "publicKeyMultibase": "fef2823c7d237bd094d633a1765d5896b0f442481a997da2f83d7a928ddce7e65",
            "blockchainAccountId":"enq:f045c5c7d50145b65ca2702c38b4e2d46658293c"
          }
        ],
        "authentication": [
          "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey"
        ],
        "assertionMethod": [
          "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey"
        ],
        "service": [
          {
	    "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#service",
    	    "type": "LinkedDomains",
    	    "serviceEndpoint": "https://did.artrac.id"
          }
        ]
      }
```


## DID Path, Query and Fragment 


**Path**

One type of path is supported in this version
/artwork : response = brief artwork information, e.g. brief description


**Query**

No query is supported in this version


**Fragment**

One type of fragment is supported in this version
#masterkey : the specific master key applied in the verification methods


## DID Create Operation

The instruction to create a new DID is issued via a POST HTTP request. 
```
POST /document/did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c   
HTTP/1.1
Host: did.artrac.id
Content-Type: application/ld+json, application/json, text/plain, */*
Accept-Encoding: gzip, deflate
{
    "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
    "operation": "create",
    "document": {
        "@context": [
            "https://www.w3.org/ns/did/v1",
            "https://w3c-ccg.github.io/ld-cryptosuite-registry/#ecdsasecp256k1signature2019"
        ],
        "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
        "verificationMethod": [
          {
            "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey",
            "type": "EcdsaSecp256k1VerificationKey2019",
            "controller": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
            "publicKeyMultibase": "fef2823c7d237bd094d633a1765d5896b0f442481a997da2f83d7a928ddce7e65",
            "blockchainAccountId":"enq:f045c5c7d50145b65ca2702c38b4e2d46658293c"
          }
        ],
        "authentication": [
          "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey"
        ],
        "assertionMethod": [
          "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey"
        ],
        "service": [
          {
	    "id": "did:art:enq:f045c5c7d](did_inquiry@artgrouplimited.com)50145b65ca2702c38b4e2d46658293c#service",
    	    "type": "LinkedDomains",
    	    "serviceEndpoint": "https://did.artrac.id"
          }
        ]
    }
}
```


## DID Read Operation (Resolve)

The instruction to read a DID is issued via a GET HTTP request. 

https://did.artrac.id/{method-specific-subject-id}

Example :

[https://did.artrac.id/f045c5c7d50145b65ca2702c38b4e2d46658293c](https://did.artrac.id/f045c5c7d50145b65ca2702c38b4e2d46658293c)

```
GET /document/did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c   
HTTP/1.1
Host: did.artrac.id
Content-Type: application/ld+json, application/ld+json, application/json, text/plain, 
Accept-Encoding: gzip, deflate
```

Response from the service endpoint did.artrac.id
```
{
    "responseCode": 0,
    "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
    "document": {
        "@context": [
            "https://www.w3.org/ns/did/v1",
            "https://w3c-ccg.github.io/ld-cryptosuite-registry/#ecdsasecp256k1signature2019"
        ],
        "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
        "verificationMethod": [
          {
            "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey",
            "type": "EcdsaSecp256k1VerificationKey2019",
            "controller": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
            "publicKeyMultibase": "fef2823c7d237bd094d633a1765d5896b0f442481a997da2f83d7a928ddce7e65",
            "blockchainAccountId":"enq:f045c5c7d50145b65ca2702c38b4e2d46658293c"
          }
        ],
        "authentication": [
          "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey"
        ],
        "assertionMethod": [
          "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey"
        ],
        "service": [
          {
	    "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#service",
    	    "type": "LinkedDomains",
    	    "serviceEndpoint": "https://did.artrac.id"
          }
        ]
    }
}
```


## DID Update Operation

The instruction to update a DID is issued via a PUT HTTP request. 
```
PUT /document/did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c   
HTTP/1.1
Host: did.artrac.id
Content-Type: application/ld+json, application/json, text/plain
Accept-Encoding: gzip, deflate
{
    "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
    "operation": "update",
    "document": {
        "@context": [
            "https://www.w3.org/ns/did/v1",
            "https://w3c-ccg.github.io/ld-cryptosuite-registry/#ecdsasecp256k1signature2019"
        ],
        "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
        "verificationMethod": [
          {
            "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey",
            "type": "EcdsaSecp256k1VerificationKey2019",
            "controller": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c",
            "publicKeyMultibase": "fef2823c7d237bd094d633a1765d5896b0f442481a997da2f83d7a928ddce7e65",
            "blockchainAccountId":"enq:f045c5c7d50145b65ca2702c38b4e2d46658293c"
          }
        ],
        "authentication": [
          "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey"
        ],
        "assertionMethod": [
          "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#masterkey"
        ],
        "service": [
          {
	    "id": "did:art:enq:f045c5c7d50145b65ca2702c38b4e2d46658293c#service",
    	    "type": "LinkedDomains",
    	    "serviceEndpoint": "https://did.artrac.id"
          }
        ]
    }
}
```


## DID Delete Operation

The instruction to delete a DID is issued via a DELETE HTTP request. 

DELETE https://did.artrac.id/f045c5c7d50145b65ca2702c38b4e2d46658293c


## Security Considerations


**Attacks**

To prevent an attack, a did proof has to go through the signature verification against the verifier’s challenge. The signature is processed inside the highly secured security key tag hardware.


## Privacy Considerations

ActracID blockchain and DID Documents contain no PII (Personally-Identifiable Information).
