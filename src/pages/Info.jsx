import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import {
  Spinner,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Button,
  Input,
  Spacer,
  Text,
  Select,
  Center,
  Textarea,
  useToast,
  Checkbox,
  Stack,
  InputGroup,
  InputLeftAddon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function info() {
  const phcMedicalFacilities = [
    {
      id: 1,
      location: "Head Office",
      facilities: [
        {
          id: 1,
          name: "Providence Human Capital",
          Address: "Block D, 1 Kenilworth Newlands, Harare",
          Phone: "+263 242 335 414",
          Phone_2: "+263 242 308 531",
        },
      ],
    },
    {
      id: 1,
      location: "Harare",
      facilities: [
        {
          id: 2,
          name: "81 Baines Providence Clinic",
          Address: "81 Baines Avenue",
          Phone: "+263 242 255 288",
        },
        {
          id: 3,
          name: "52 Baines Providence Medical Center",
          Address: "52 Baines Avenue",
          Phone: "+263 242 794 270",
        },
        {
          id: 4,
          name: "64 Cork Executive Clinc",
          Address: "64 Cork Road Avondale",
          Phone: "+263 242 252 124",
        },
        {
          id: 5,
          name: "40 Chinamano ",
          Address: "40 Chinamano Avenue",
          Phone: "+263 789 334 154",
        },
        {
          id: 6,
          name: "Epworth Clinic",
          Address: "No 1034, Dombo, Epworth",
          Phone: "+263 242 771 675 426",
        },
      ],
    },
    {
      id: 2,
      location: "Bulawayo",
      facilities: [
        {
          id: 1,
          name: "Fort Street",
          Address: "Fort Street and 9th Avenue",
          Phone: "+263 292 887 490",
        },
        {
          id: 2,
          name: "Royal Arcade Complex",
          Address: "",
          Phone: "+263 776 435 725",
        },
      ],
    },
    {
      id: 3,
      location: "Gweru",
      facilities: [
        {
          id: 1,
          name: "39",
          Address: "6th Street",
          Phone: "+263 775 153 712",
        },
      ],
    },
    {
      id: 4,
      location: "Mutare",
      facilities: [
        {
          id: 1,
          name: "126 Herbert Chitepo Street",
          Address: "",
          Phone: "+263 202 062 047",
        },
      ],
    },
    {
      id: 5,
      location: "Masvingo",
      facilities: [
        {
          id: 1,
          name: "13 Shuvai Mahofa Street",
          Address: "",
          Phone: "+263 392 265 619",
        },
      ],
    },
    {
      id: 6,
      location: "Beitbridge",
      facilities: [
        {
          id: 1,
          name: "Amstes Surgery",
          Address: "2854 Dulibadzimu",
          Phone: "+263 242 255 288",
        },
      ],
    },
    {
      id: 7,
      location: "Chegutu",
      facilities: [
        {
          id: 1,
          name: "Medi Hub Clinic",
          Address: "12 Seigrunary",
          Phone: "+263 552 4900",
          phone: "+263 552 4006",
          phone_2: "+263 774 744 107",
        },
      ],
    },
    {
      id: 8,
      location: "Chinhoyi",
      facilities: [
        {
          id: 1,
          name: "Chinhoyi 24Hr Medical Center",
          Address: "",
          Phone: "+263 788 661 025",
        },
      ],
    },
    {
      id: 9,
      location: "Hwange",
      facilities: [
        {
          id: 1,
          name: "Medstar Medical Center",
          Address: "760 Baghdad",
          Phone: "+263 787 139 817",
        },
      ],
    },
    {
      id: 10,
      location: "Kadoma",
      facilities: [
        {
          id: 1,
          name: "336 R. G Mugabe way & Fit Square",
          Address: "",
          Phone: "+263 682 123 092",
        },
      ],
    },
    {
      id: 11,
      location: "Kwekwe",
      facilities: [
        {
          id: 1,
          name: "Shop 5 Bahadar Building",
          Address: "Cnr 3rd street & 3rd Avenue",
          Phone: "+263 5524 900",
          phone_2: "+263 5524 006",
        },
      ],
    },
    {
      id: 12,
      location: "Kariba",
      facilities: [
        {
          id: 1,
          name: "Padenga Holding",
          Address: "35 Lagoon Drive",
          Phone: "+263 772 731 032",
        },
      ],
    },
    {
      id: 13,
      location: "Victoria Falls",
      facilities: [
        {
          id: 1,
          name: "The Greenlight Medical Center",
          Address: "6247 Mkhosana",
          Phone: "+263 832 840 493",
        },
      ],
    },
    {
      id: 13,
      location: "Zvishavane",
      facilities: [
        {
          id: 1,
          name: "Acropol Medical Center",
          Address: "R.G Mugabe",
          Phone: "+263 392 352 213",
        },
      ],
    },
    {
      id: 13,
      location: "Guruve",
      facilities: [
        {
          id: 1,
          name: "Eureka Mine",
          Address: "",
          Phone: "+263 774 097 833",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Container maxW="1600px" color="" bg="" pt="5">
        <TableContainer>
          {phcMedicalFacilities &&
            phcMedicalFacilities.map((facility) => (
              <>
                <Text mt='9' mb='2' fontSize='xl'>Location: {facility.location}</Text>
                <Table variant="striped" colorScheme="green" key={facility.id} borderWidth="1px" >

                  <Thead>
                    <Tr>
                      <Th>Facility</Th>
                      <Th>Town</Th>
                      <Th>Address</Th>
                      <Th>Phone</Th>
                      <Th>Phone_2</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {facility.facilities.map((clns) => (
                      <Tr>
                        <Td>{clns.name}</Td>
                        <Td>{facility.location}</Td>
                        <Td>{clns.Address}</Td>
                        <Td>{clns.Phone}</Td>
                        <Td>{clns.Phone_2}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </>
            ))}
        </TableContainer>
      </Container>
    </>
  );
}
