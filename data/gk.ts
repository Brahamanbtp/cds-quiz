import type { Question } from "@/types/Question";

const gkData: Record<string, Question[]> = {
    "2022-I": [
    {
        "question": "If the magnification produced by a lens is +2, then the image is :",
        "options": [
            "erect, virtual and smaller than the object.",
            "inverted, real and smaller than the object.",
            "erect, virtual and larger than the object.",
            "inverted, real and larger than the object."
        ],
        "answer": "erect, virtual and larger than the object."
    },
    {
        "question": "What is the correct sequence of resistivity of silver, nichrome and glass at room temperature ?",
        "options": [
            "Silver < Nichrome < Glass",
            "Glass < Nichrome < Silver",
            "Silver < Glass < Nichrome",
            "Nichrome < Silver < Glass"
        ],
        "answer": "Silver < Nichrome < Glass"
    },
    {
        "question": "At the time of short-circuit, the current in the circuit :",
        "options": [
            "reduces substantially.",
            "does not change.",
            "increases heavily.",
            "keeps on fluctuating."
        ],
        "answer": "increases heavily."
    },
    {
        "question": "Which one of the following statements is <i>not</i> correct ?",
        "options": [
            "An electric motor converts electrical energy into mechanical energy.",
            "An electric generator works on the principle of electromagnetic induction.",
            "The magnetic field at the centre of a long circular coil carrying current will be parallel straight lines.",
            "A wire with a green insulation is usually the live wire of an electric supply."
        ],
        "answer": "A wire with a green insulation is usually the live wire of an electric supply."
    },
    {
        "question": "A boy completes one round of a circular track of diameter 200 m in 30 s. What will be the displacement at the end of 3 minutes and 45 seconds ?",
        "options": [
            "50 m",
            "100 m",
            "200 m",
            "236 m"
        ],
        "answer": "200 m"
    },
    {
        "question": "What happens to the gravitational force between two objects if the mass of one object is doubled and the distance between them is also doubled ?",
        "options": [
            "The force would remain the same",
            "The force would be doubled",
            "The force would be halved",
            "The force would increase by a factor of 4"
        ],
        "answer": "The force would be halved"
    },
    {
        "question": "The number of moles of oxygen gas used in the complete combustion of 1 mole of glucose is :",
        "options": [
            "1",
            "3",
            "6",
            "12"
        ],
        "answer": "6"
    },
    {
        "question": "Which one of the following is <i>not</i> an example of an oxidation reaction ?",
        "options": [
            "The taste of butter changes if left for a longer period",
            "A white substance is formed when an aqueous solution of barium chloride is mixed with sodium sulphate solution",
            "A reddish-brown powder gets coated on articles made of iron",
            "Wine gets sour with time"
        ],
        "answer": "A white substance is formed when an aqueous solution of barium chloride is mixed with sodium sulphate solution"
    },
    {
        "question": "Methanoic acid is normally found in :",
        "options": [
            "muscles",
            "urine",
            "ant stings",
            "human brain"
        ],
        "answer": "ant stings"
    },
    {
        "question": "What is the number of moles of 'He' in 104 g of helium gas ?",
        "options": [
            "52",
            "26",
            "13",
            "6.5"
        ],
        "answer": "26"
    },
    {
        "question": "While burning hydrocarbon fuels, if we see a yellow flame with lots of black smoke, it means that the fuel is :",
        "options": [
            "made of saturated hydrocarbons.",
            "made of unsaturated hydrocarbons.",
            "burning completely.",
            "wet."
        ],
        "answer": "made of unsaturated hydrocarbons."
    },
    {
        "question": "The number of saturated and unsaturated bonds in cyclohexane are :",
        "options": [
            "9 and 0 respectively.",
            "18 and 3 respectively.",
            "18 and 0 respectively.",
            "9 and 3 respectively."
        ],
        "answer": "18 and 0 respectively."
    },
    {
        "question": "Which one of the following statements is true when non-metals are dissolved in water ?",
        "options": [
            "They produce basic oxides.",
            "They produce acidic oxides.",
            "They produce neutral oxides.",
            "They provide hydroxides."
        ],
        "answer": "They produce acidic oxides."
    },
    {
        "question": "Which one of the following statements is <i>not</i> correct with regard to genetically modified organisms ?",
        "options": [
            "In this technique a gene from one organism is isolated and transferred to the cell of another organism.",
            "This technique has applications only in plants.",
            "Genes for insect resistance may spread from crop plants to wild plants.",
            "To produce a transgenic animal the novel genes are inserted at a very early stage of development."
        ],
        "answer": "This technique has applications only in plants."
    },
    {
        "question": "Suppose, due to an accident, the delicate lining of the mouth and the oesophagus of a person is injured. In this case, which one of the following tissues will be affected ?",
        "options": [
            "Smooth muscle",
            "Cuboidal epithelium",
            "Squamous epithelium",
            "Striated muscle"
        ],
        "answer": "Squamous epithelium"
    },
    {
        "question": "Which one of the following statements is correct about the cell membrane ?",
        "options": [
            "It is made up of cellulose.",
            "It is a permeable structure for all substances.",
            "It is flexible and enables the cell to engulf many materials.",
            "It does not allow diffusion of gases like oxygen and carbon dioxide."
        ],
        "answer": "It is flexible and enables the cell to engulf many materials."
    },
    {
        "question": "Plants prepare glucose in the process of :",
        "options": [
            "respiration",
            "photosynthesis",
            "degradation",
            "mineral absorption"
        ],
        "answer": "photosynthesis"
    },
    {
        "question": "The disease rickets develops in children due to the deficiency of :",
        "options": [
            "Vitamin C",
            "Vitamin D",
            "Vitamin A",
            "Vitamin B"
        ],
        "answer": "Vitamin D"
    },
    {
        "question": "Match List I with List II and select the correct answer using the code given below the lists :<br/><br/><table><tr><th>List I (Blood Vessel)</th><th>List II (Function)</th></tr><tr><td>A. Pulmonary artery</td><td>1. Carries blood from lungs to heart</td></tr><tr><td>B. Capillaries</td><td>2. Carries blood to heart muscle</td></tr><tr><td>C. Coronary artery</td><td>3. Connection between arteries and veins</td></tr><tr><td>D. Pulmonary vein</td><td>4. Carries blood from heart to lungs</td></tr></table><br/>Code :",
        "options": [
            "A-4, B-3, C-2, D-1",
            "A-4, B-2, C-3, D-1",
            "A-1, B-2, C-3, D-4",
            "A-1, B-3, C-2, D-4"
        ],
        "answer": "A-4, B-3, C-2, D-1"
    },
    {
        "question": "Which one of the following statements is true with regard to a greenhouse ?",
        "options": [
            "The shorter wavelength infrared radiations from the Sun can enter into the greenhouse while longer wavelength infrared radiations from the ground and the plants inside the greenhouse cannot pass back out through the glass.",
            "The shorter wavelength infrared radiations from the Sun can enter into the greenhouse and the longer wavelength infrared radiations from the ground and the plants inside the greenhouse can also pass back out through the glass.",
            "The shorter wavelength infrared radiations from the Sun cannot enter into the greenhouse while longer wavelength infrared radiations from the ground and the plants inside the greenhouse can pass back out through the glass.",
            "No infrared radiation can pass through the glass of the greenhouse."
        ],
        "answer": "The shorter wavelength infrared radiations from the Sun can enter into the greenhouse while longer wavelength infrared radiations from the ground and the plants inside the greenhouse cannot pass back out through the glass."
    },
    {
        "question": "An object weighs 9 N on the surface of the Earth. What would be its weight, when measured on the surface of a planet where the acceleration due to gravity is 9 times that on the surface of the Earth ?",
        "options": [
            "The weight would remain the same",
            "The weight would be equal to 1 N",
            "The weight would become 9 times",
            "The weight will be reduced to 1/9 N"
        ],
        "answer": "The weight would become 9 times"
    },
    {
        "question": "The twinkling of a star is due to :",
        "options": [
            "atmospheric reflection of starlight.",
            "atmospheric refraction of starlight.",
            "continuous change in the position of the star.",
            "oscillation of starlight."
        ],
        "answer": "atmospheric refraction of starlight."
    },
    {
        "question": "A convex lens has a focal length of 15 cm. At what distance should an object be placed in front of the lens to get a real image of the same size of the object ?",
        "options": [
            "15 cm",
            "10 cm",
            "30 cm",
            "40 cm"
        ],
        "answer": "30 cm"
    },
    {
        "question": "Which one of the following statements about biogas is <i>not</i> correct ?",
        "options": [
            "It is mainly composed of methane gas.",
            "It is a non-renewable source of energy.",
            "It is formed by the decomposition of cow dung in the absence of oxygen.",
            "It burns without smoke and leaves no residue."
        ],
        "answer": "It is a non-renewable source of energy."
    },
    {
        "question": "Which of the following mineral acids is found in human stomach ?",
        "options": [
            "Hydrochloric acid",
            "Lactic acid",
            "Uric acid",
            "Methanoic acid"
        ],
        "answer": "Hydrochloric acid"
    },
    {
        "question": "Which one of the following living organisms gives litmus ?",
        "options": [
            "Protozoa",
            "Virus",
            "Lichen",
            "Saccharomyces"
        ],
        "answer": "Lichen"
    },
    {
        "question": "Which one of the following is the main reason of acid rains ?",
        "options": [
            "Dissolution of sulphur and nitrogen oxides in rain",
            "Dissolution of minerals in rain",
            "Dissolution of dust particles in rain",
            "Dissolution of soil solution in rain"
        ],
        "answer": "Dissolution of sulphur and nitrogen oxides in rain"
    },
    {
        "question": "Mutation in a virus is caused due to a change in its :",
        "options": [
            "cell size.",
            "genetic material.",
            "shape.",
            "colour."
        ],
        "answer": "genetic material."
    },
    {
        "question": "Yeast, which is used to make bread, belongs to the group :",
        "options": [
            "Protista",
            "Fungi",
            "Monera",
            "Protozoa"
        ],
        "answer": "Fungi"
    },
    {
        "question": "Hyphae are :",
        "options": [
            "produced by yeast.",
            "thin threads formed by many fungi.",
            "reproductive cells.",
            "responsible for preventing the cell from losing water in wet conditions."
        ],
        "answer": "thin threads formed by many fungi."
    },
    {
        "question": "Which one of the following is the first urban settlement in the world to reach a population size of one million (million-plus city) ?",
        "options": [
            "London",
            "Paris",
            "New York",
            "Washington D.C."
        ],
        "answer": "London"
    },
    {
        "question": "Which one of the following climatic types (K&ouml;ppen's Scheme) is best suited to describe the climate of the western fringe of Rajasthan ?",
        "options": [
            "Amw",
            "Aw",
            "Bwhw",
            "Cwg"
        ],
        "answer": "Bwhw"
    },
    {
        "question": "Where are the Bermuda Islands located ?",
        "options": [
            "Caribbean Sea",
            "North Atlantic Ocean",
            "Gulf of Mexico",
            "Mediterranean Sea"
        ],
        "answer": "North Atlantic Ocean"
    },
    {
        "question": "Which one of the following States/Union Territories has the highest percentage of forest area to the total geographical area ?",
        "options": [
            "Arunachal Pradesh",
            "Lakshadweep",
            "Nagaland",
            "Mizoram"
        ],
        "answer": "Lakshadweep"
    },
    {
        "question": "In India, the period of steady population growth refers to the decade(s) of :",
        "options": [
            "1981 - 2011",
            "1951 - 1981",
            "1921 - 1951",
            "1911 - 1921"
        ],
        "answer": "1921 - 1951"
    },
    {
        "question": "Manikaran in Himachal Pradesh is known for :",
        "options": [
            "Solar energy.",
            "Geothermal energy.",
            "Bioenergy.",
            "Wind energy."
        ],
        "answer": "Geothermal energy."
    },
    {
        "question": "Who among the following, first mooted the idea of deficit financing ?",
        "options": [
            "Adam Smith",
            "Alfred Marshall",
            "John Maynard Keynes",
            "Milton Friedman"
        ],
        "answer": "John Maynard Keynes"
    },
    {
        "question": "Which of the following is/are the function(s) of environment ?<br/><ol><li>Supplying resources</li><li>Sustaining life</li><li>Providing aesthetic services</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "2 and 3 only",
            "1, 2 and 3",
            "1 and 3 only"
        ],
        "answer": "1, 2 and 3"
    },
    {
        "question": "Who among the following formulated the concept of poverty as a measurable development indicator in the Indian subcontinent ?",
        "options": [
            "Dadabhai Naoroji",
            "Romesh Chandra Dutt",
            "V.K.R.V. Rao",
            "M. Ranade"
        ],
        "answer": "Dadabhai Naoroji"
    },
    {
        "question": "Which one of the following terms denotes the inputs in terms of tools, machines, buildings, raw materials and money in hand required at any stage of production ?",
        "options": [
            "Fixed capital",
            "Working capital",
            "Physical capital",
            "Human capital"
        ],
        "answer": "Physical capital"
    }
,

    {
        "question": "Which one of the following inputs is required in less quantity in case of non-farming activities ?",
        "options": [
            "Land",
            "Labour",
            "Capital",
            "Raw material"
        ],
        "answer": "Land"
    },
    {
        "question": "Which one of the following statements with regard to the National Rural Employment Guarantee Act, 2005 is correct ?",
        "options": [
            "It ensures 175 days of employment to needy persons in rural areas.",
            "It gives higher wages to women workers.",
            "People are generally given both skilled and unskilled jobs.",
            "This is implemented only in rural areas of India."
        ],
        "answer": "This is implemented only in rural areas of India."
    },
    {
        "question": "Which one of the following is <i>not</i> mentioned as a form of Emergency in the Constitution of India ?",
        "options": [
            "National Emergency",
            "State Emergency in terms of Proclamation of President's Rule in a State",
            "Financial Emergency",
            "Health Emergency"
        ],
        "answer": "Health Emergency"
    },
    {
        "question": "Which one of the following is <i>not</i> a provision related to a Money Bill ?",
        "options": [
            "Imposition, abolition, remission, alteration or regulation of any tax",
            "Appropriation of moneys out of the Consolidated Fund of India",
            "Imposition of fines by local authority for local purpose",
            "Custody of the Consolidated Fund of India or the Contingency Fund of India"
        ],
        "answer": "Imposition of fines by local authority for local purpose"
    },
    {
        "question": "Which one of the following items is <i>not</i> covered under GST ?",
        "options": [
            "Cosmetics",
            "Medical grade oxygen",
            "Jewellery",
            "Petrol"
        ],
        "answer": "Petrol"
    },
    {
        "question": "Which of the following statements is/are correct ?<br/><ol><li>Committee on Estimates is an ad hoc committee of the Parliament.</li><li>Committee on Railway Convention is a standing committee of the Parliament.</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Neither 1 nor 2"
    },
    {
        "question": "Which one of the following is <i>not</i> an Indian form of Socialism ?",
        "options": [
            "Democratic Socialism",
            "Radical Socialism",
            "Communitarian Socialism",
            "Nehruvian Socialism"
        ],
        "answer": "Radical Socialism"
    },
    {
        "question": "Which one of the following best describes BRICS ?",
        "options": [
            "A group of five nuclear powers",
            "A group of five industrialized nations",
            "A group of five major emerging economies",
            "A group of five potentially strong UN Security Council members from the Countries of the Global South"
        ],
        "answer": "A group of five major emerging economies"
    },
    {
        "question": "Which one of the following is <i>not</i> a characteristic feature of Indian Federalism ?",
        "options": [
            "The federating units consented to form a union",
            "Residuary powers vest with the Centre",
            "Single citizenship",
            "An extensive Union and Concurrent list"
        ],
        "answer": "The federating units consented to form a union"
    },
    {
        "question": "Which of the following statements about sculptures at Sanchi is/are correct ?<br/><ol><li>In some sculptures there is representation of Shalabhanjika.</li><li>The figure of Shalabhanjika is represented by a woman surrounded by lotuses and elephants.</li><li>The Shalabhanjika motif was not directly inspired by Buddhist ideas.</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1, 2 and 3",
            "2 and 3 only",
            "2 only",
            "1 and 3 only"
        ],
        "answer": "1 and 3 only"
    },
    {
        "question": "In which one of the following years was the first telegraphic connection established between Europe and India ?",
        "options": [
            "1851",
            "1854",
            "1865",
            "1871"
        ],
        "answer": "1865"
    },
    {
        "question": "Who among the following was the founder of the Virashaiva Movement in Karnataka ?",
        "options": [
            "Basavanna",
            "Appar",
            "Sambandar",
            "Sundarar"
        ],
        "answer": "Basavanna"
    },
    {
        "question": "The ruins of Hampi were brought to light by which of the following British officers of the East India Company ?",
        "options": [
            "Colonel Colin Mackenzie",
            "James Prinsep",
            "William Jones",
            "James Rennell"
        ],
        "answer": "Colonel Colin Mackenzie"
    },
    {
        "question": "Which one of the following works was composed by Krishnadevaraya on statecraft in Telugu ?",
        "options": [
            "Amuktamalyada",
            "Jambavati Kalyanam",
            "Rayavachakamu",
            "Satyavadu Parinaya"
        ],
        "answer": "Amuktamalyada"
    },
    {
        "question": "Match List I with List II and select the correct answer using the code given below the lists :<br/><br/><table><tr><th>List I (Soil Type)</th><th>List II (Salient Characteristic)</th></tr><tr><td>A. Entisols</td><td>1. Soils having weakly or quickly developed horizons</td></tr><tr><td>B. Inceptisols</td><td>2. Weakly developed soils with no horizons</td></tr><tr><td>C. Histosols</td><td>3. These soils are very old and highly weathered</td></tr><tr><td>D. Oxisols</td><td>4. These soils have very high quantity of organic matter in the upper layers</td></tr></table><br/>Code :",
        "options": [
            "A-2, B-1, C-4, D-3",
            "A-2, B-4, C-1, D-3",
            "A-3, B-4, C-1, D-2",
            "A-3, B-1, C-4, D-2"
        ],
        "answer": "A-2, B-1, C-4, D-3"
    },
    {
        "question": "A peripediment in a desert or semi-desert region is also known as :",
        "options": [
            "Inselberg",
            "Zeugen",
            "Bajada",
            "Playa"
        ],
        "answer": "Bajada"
    },
    {
        "question": "Individual lava flows are normally only a few feet thick, but over a long period of time, repeated flows may build up a volcano. Such volcanoes are termed as :",
        "options": [
            "Shield volcano.",
            "Composite volcano.",
            "Strato-volcano.",
            "Cinder-cone volcano."
        ],
        "answer": "Shield volcano."
    },
    {
        "question": "Isohalines are lines joining equal :",
        "options": [
            "temperature.",
            "pressure.",
            "rainfall.",
            "salinity."
        ],
        "answer": "salinity."
    },
    {
        "question": "Which one of the following would be considered as Foreign Direct Investment ?",
        "options": [
            "A foreign company buying shares in stock exchanges in India",
            "A foreign country pension fund investing in Indian stock markets",
            "A foreign merchant banker buying shares from Indian stock markets",
            "A foreign entity setting up an educational institution in India"
        ],
        "answer": "A foreign entity setting up an educational institution in India"
    },
    {
        "question": "Which one of the following does <i>not</i> influence quantity demanded for a good ?",
        "options": [
            "Good's own price",
            "Price of a complementary good",
            "Price of a substitute good",
            "Prices of inputs into production of the good"
        ],
        "answer": "Prices of inputs into production of the good"
    },
    {
        "question": "Infant mortality ratio of which one of the following countries is comparable to that of India ?",
        "options": [
            "China",
            "United States of America",
            "Sri Lanka",
            "None of the above"
        ],
        "answer": "None of the above"
    },
    {
        "question": "Which of the following factors signify monopolistic competition ?<br/><ol><li>Differentiated products</li><li>Large number of buyers and sellers</li><li>Barriers to entry</li><li>Homogeneous products</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 and 2 only",
            "1, 2 and 3 only",
            "3 and 4 only",
            "2 and 4 only"
        ],
        "answer": "1 and 2 only"
    },
    {
        "question": "Article 19(1) of the Constitution of India, as it stands amended, includes which of the following ?<br/><ol><li>Freedom of speech and expression</li><li>Assemble peaceably and without arms</li><li>To acquire and dispose property</li><li>To move freely throughout the territory of India</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 and 2 only",
            "1, 2, 3 and 4",
            "4 only",
            "1, 2 and 4 only"
        ],
        "answer": "1, 2 and 4 only"
    },
    {
        "question": "Which one of the following statements with regard to the Election Commission is <i>not</i> correct ?",
        "options": [
            "It conducts elections to the office of the Vice President of India.",
            "An Election Commissioner can be removed from his office without the recommendation of the Chief Election Commissioner.",
            "Election Commissioners are appointed by the President of India.",
            "Governor of a State is constitutionally bound to provide support staff to the Election Commission, if required."
        ],
        "answer": "An Election Commissioner can be removed from his office without the recommendation of the Chief Election Commissioner."
    },
    {
        "question": "Which of the following statements with regard to the Preamble to the Constitution of India is/are correct ?<br/><ol><li>Equality of status and equality of opportunity find mention in the Preamble.</li><li>The expression 'unity and integrity of the Nation' was not there in the Preamble since the beginning.</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Both 1 and 2"
    },
    {
        "question": "In Part-IVA of the Constitution of India, which one of the following is <i>not</i> mentioned as a duty of every citizen of India ?",
        "options": [
            "To render national service when called upon to do so",
            "To renounce practices derogatory to the dignity of women",
            "To value and preserve a unitary national culture",
            "To develop the spirit of inquiry and reform"
        ],
        "answer": "To value and preserve a unitary national culture"
    },
    {
        "question": "Which of the following terms were used in the Indo-Persian sources of the Mughal period to denote a peasant ?<br/><ol><li>Raiyat</li><li>Asami</li><li>Muzarian</li><li>Majur</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3 only",
            "1, 3 and 4 only"
        ],
        "answer": "1, 2 and 3 only"
    },
    {
        "question": "Who among the following pioneering Bengali women serialised her autobiography <i>Amar Katha</i> between 1910 and 1913 ?",
        "options": [
            "Binodini Dasi",
            "Rashsundari Debi",
            "Begum Rokeya Sakhawat Hossain",
            "Kailashbashini Debi"
        ],
        "answer": "Binodini Dasi"
    },
    {
        "question": "Arrange the following events chronologically starting from the earliest :<br/><ol><li>Ahmedabad Mill Strike</li><li>Champaran Satyagraha</li><li>Foundation of the Satyagraha Sabha</li><li>Jallianwala Bagh Massacre</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1, 2, 3, 4",
            "2, 1, 3, 4",
            "2, 4, 1, 3",
            "4, 2, 1, 3"
        ],
        "answer": "2, 1, 3, 4"
    },
    {
        "question": "The year 1916 is important in Indian history for :<br/><ol><li>Lucknow Session of the Congress</li><li>Congress - League Pact</li><li>Formation of Home Rule League</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 and 3 only",
            "2 and 3 only",
            "1 and 2 only",
            "1, 2 and 3"
        ],
        "answer": "1, 2 and 3"
    },
    {
        "question": "Match List I with List II and select the correct answer using the code given below the lists :<br/><br/><table><tr><th>List I (Railway Zone)</th><th>List II (Headquarters)</th></tr><tr><td>A. South-Eastern</td><td>1. Secunderabad</td></tr><tr><td>B. South-Central</td><td>2. Kolkata</td></tr><tr><td>C. South-Western</td><td>3. Bilaspur</td></tr><tr><td>D. South-East-Central</td><td>4. Hubli</td></tr></table><br/>Code :",
        "options": [
            "A-2, B-1, C-4, D-3",
            "A-2, B-4, C-1, D-3",
            "A-3, B-4, C-1, D-2",
            "A-3, B-1, C-4, D-2"
        ],
        "answer": "A-2, B-1, C-4, D-3"
    }
,

    {
        "question": "Ten Degree Channel is found between :",
        "options": [
            "North Andaman and Middle Andaman.",
            "South Andaman and Little Andaman.",
            "Little Andaman and Car Nicobar.",
            "Car Nicobar and Great Nicobar."
        ],
        "answer": "Little Andaman and Car Nicobar."
    },
    {
        "question": "Match List I with List II and select the correct answer using the code given below the lists :<br/><br/><table><tr><th>List I (Waterfall)</th><th>List II (State)</th></tr><tr><td>A. Barkana</td><td>1. Tamil Nadu</td></tr><tr><td>B. Dudhsagar</td><td>2. Odisha</td></tr><tr><td>C. Duduma</td><td>3. Karnataka</td></tr><tr><td>D. Kiliyur</td><td>4. Goa</td></tr></table><br/>Code :",
        "options": [
            "A-3, B-2, C-4, D-1",
            "A-3, B-4, C-2, D-1",
            "A-1, B-4, C-2, D-3",
            "A-1, B-2, C-4, D-3"
        ],
        "answer": "A-3, B-4, C-2, D-1"
    },
    {
        "question": "Which one of the following is <i>not</i> a resultant of the El Nino effect ?",
        "options": [
            "Distortion of equatorial atmospheric circulation",
            "Flow of the South-East Trade Winds towards the Indian Ocean",
            "Irregularities in the evaporation of sea water",
            "Reduction in the amount of planktons which reduces the number of fish in the sea"
        ],
        "answer": "Flow of the South-East Trade Winds towards the Indian Ocean"
    },
    {
        "question": "According to the Constitution of India, which one of the following statements is <i>not</i> correct ?",
        "options": [
            "The executive powers of the Union shall be vested in the President of India.",
            "Parliament, by law, can confer functions on authorities other than the President of India.",
            "The President of India is elected by an electoral college consisting of all Members of Parliament and all Members of all State Legislatures.",
            "A person, having held office as the President, shall be eligible for election to that office for the second term."
        ],
        "answer": "The President of India is elected by an electoral college consisting of all Members of Parliament and all Members of all State Legislatures."
    },
    {
        "question": "Which one of the following Articles of the Constitution of India requires the Prime Minister of India to furnish information related to decisions of the Council of Ministers to the President of India ?",
        "options": [
            "Article 78",
            "Article 74",
            "Article 75",
            "Article 81"
        ],
        "answer": "Article 78"
    },
    {
        "question": "Which one of the following statements is <i>not</i> correct ?",
        "options": [
            "All executive actions of the Government of India are taken in the name of the President of India.",
            "The President of India appoints a person as Attorney General of India provided she/he is qualified to be a Judge of the Supreme Court or a High Court.",
            "The total number of Ministers in the Council of Ministers cannot exceed ten percent of the total number of members of the House of People.",
            "The President of India is bound to act as per the advice tendered by the Council of Ministers."
        ],
        "answer": "The total number of Ministers in the Council of Ministers cannot exceed ten percent of the total number of members of the House of People."
    },
    {
        "question": "The issue, 'whether Section 377 of the Indian Penal Code is violative of Articles 21, 14 and 15 of the Constitution of India' was decided in which one of the following cases ?",
        "options": [
            "Shreya Singhal vs. Union of India",
            "Vishakha vs. State of Rajasthan",
            "Shayara Bano vs. Union of India",
            "Naz Foundation vs. Government of NCT of Delhi and others"
        ],
        "answer": "Naz Foundation vs. Government of NCT of Delhi and others"
    },
    {
        "question": "Which one of the following writs means 'you may have the body' ?",
        "options": [
            "Habeas Corpus",
            "Mandamus",
            "Certiorari",
            "Quo Warranto"
        ],
        "answer": "Habeas Corpus"
    },
    {
        "question": "Who among the following belonged to Serampore Mission ?<br/><ol><li>William Carey</li><li>Joshua Marshman</li><li>William Ward</li><li>David Hare</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 and 2 only",
            "1 and 3 only",
            "1, 2 and 3 only",
            "2, 3 and 4 only"
        ],
        "answer": "1, 2 and 3 only"
    },
    {
        "question": "Consider the following statements :<br/><ol><li>In the 19th century, peasants in various parts of India rose in revolt against moneylenders and grain dealers.</li><li>In May 1875, at village Supa in Poona District in the Bombay Deccan, peasants attacked shopkeepers, burnt the <i>bahi khatas</i> (account books), looted grain shops and set fire to the houses of Sahukars.</li></ol><br/>Which of the statements given above is/are correct ?",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Both 1 and 2"
    },
    {
        "question": "Which one of the following was <i>not</i> a part of Kautilya's Saptanga Theory of the State ?",
        "options": [
            "Amatya",
            "Janapada",
            "Durga",
            "Dhamma"
        ],
        "answer": "Dhamma"
    },
    {
        "question": "Consider the following statements about Ashoka's faith in Buddhism :<br/><ol><li>Rummindei Pillar Inscription and Nigali Sagar Pillar Inscription provide clear evidence of Ashoka's faith in Buddhism.</li><li>Minor Rock Edict-I gives evidence of a sudden change in Ashoka's faith in Buddhism.</li></ol><br/>Which of the statements given above is/are correct ?",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "1 only"
    },
    {
        "question": "Which of the following variable(s) is/are displayed in population pyramids ?<br/><ol><li>Age-groups</li><li>Sex indicators (male and female)</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Both 1 and 2"
    },
    {
        "question": "Match List I with List II and select the correct answer using the code given below the lists :<br/><br/><table><tr><th>List I (Lake)</th><th>List II (State)</th></tr><tr><td>A. Kaliveli</td><td>1. Sikkim</td></tr><tr><td>B. Khajjiar</td><td>2. Kerala</td></tr><tr><td>C. Khecheopalri</td><td>3. Himachal Pradesh</td></tr><tr><td>D. Vembanad</td><td>4. Tamil Nadu</td></tr></table><br/>Code :",
        "options": [
            "A-2, B-1, C-3, D-4",
            "A-2, B-3, C-1, D-4",
            "A-4, B-1, C-3, D-2",
            "A-4, B-3, C-1, D-2"
        ],
        "answer": "A-4, B-3, C-1, D-2"
    },
    {
        "question": "Which one of following is the most important factor for the formulation of smog ?",
        "options": [
            "Long winter nights",
            "Formation of an 'inversion lid'",
            "Presence of many air pollutant resources",
            "Rapid fall in temperature with increasing height above the sea level"
        ],
        "answer": "Formation of an 'inversion lid'"
    },
    {
        "question": "Mount Thuillier (642 m) is an important mountain peak of Andaman and Nicobar Islands. It is located in :",
        "options": [
            "North Andaman",
            "Middle Andaman",
            "South Andaman",
            "Great Nicobar"
        ],
        "answer": "Great Nicobar"
    },
    {
        "question": "Which one of the following land surfaces has the highest albedo ?",
        "options": [
            "A snow covered mountain",
            "A barren rocky piedmont surface",
            "A sandy desert",
            "A mangrove forest"
        ],
        "answer": "A snow covered mountain"
    },
    {
        "question": "Which one of the following terms represents the maxim, 'no man/person shall be condemned unheard' ?",
        "options": [
            "<i>Autrefois acquit</i>",
            "<i>Non bis in idem</i>",
            "<i>Autrefois convict</i>",
            "<i>Audi Alteram Partem</i>"
        ],
        "answer": "<i>Audi Alteram Partem</i>"
    },
    {
        "question": "Which one of the following statements about the Speaker of Lok Sabha is <i>not</i> correct ?",
        "options": [
            "He shall vacate his office if he ceases to be a member of the House of the People.",
            "He may, at any time, resign by writing his resignation to the President of India.",
            "He may be removed from his office by a resolution of the House of the People passed by majority of all the then members of the House.",
            "While the office of the Speaker is vacant, the duties of the office shall be performed by the Deputy Speaker."
        ],
        "answer": "He may, at any time, resign by writing his resignation to the President of India."
    },
    {
        "question": "Which one of the following statements about a Bill for Amendment of the Constitution of India is <i>not</i> correct ?",
        "options": [
            "It is governed by Article 368(2) of the Constitution of India.",
            "Joint sitting can be resorted to for passing a Bill amending the Constitution of India.",
            "The State Legislatures cannot initiate any Bill or proposal for amendment of the Constitution of India.",
            "The previous sanction of the President of India is not required for introducing any Bill in the Parliament for amendment of the Constitution of India."
        ],
        "answer": "Joint sitting can be resorted to for passing a Bill amending the Constitution of India."
    },
    {
        "question": "Which one of the following methods is followed in electing the President of India ?",
        "options": [
            "Proportional Representation only",
            "First-Past-the-Post System only",
            "Proportional Representation and the Single Transferable Vote System",
            "Proportional Representation and the First-Past-the-Post System"
        ],
        "answer": "Proportional Representation and the Single Transferable Vote System"
    },
    {
        "question": "From among the following Mahajanapadas, identify the <i>gana/sangha</i> (oligarchy) :",
        "options": [
            "Magadha",
            "Vajji",
            "Avanti",
            "Kosala"
        ],
        "answer": "Vajji"
    },
    {
        "question": "The provision for separate electorate for Muslims was given in",
        "options": [
            "Morley-Minto Reforms, 1909",
            "Montagu-Chelmsford Reforms, 1919",
            "Communal Award, 1932",
            "Government of India Act, 1935"
        ],
        "answer": "Morley-Minto Reforms, 1909"
    },
    {
        "question": "Which of the following was/were the founder member(s) of Hindustan Socialist Republican Army established in September, 1928 ?<br/><ol><li>Bhagat Singh</li><li>Jatindranath</li><li>Ajoy Ghosh</li><li>Phanindranath Ghosh</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "2 and 3 only",
            "1, 2 and 3 only",
            "1, 2, 3 and 4"
        ],
        "answer": "1, 2, 3 and 4"
    },
    {
        "question": "Who among the following did <i>not</i> belong to the group of 'No-Changers' ?",
        "options": [
            "M.A. Ansari",
            "Vithalbhai Patel",
            "Chakravarti Rajagopalachari",
            "Kasturi Ranga Iyengar"
        ],
        "answer": "Vithalbhai Patel"
    },
    {
        "question": "The headquarters of Ghadar Movement/Party were at",
        "options": [
            "San Francisco",
            "Stanford University",
            "Portland",
            "Florida"
        ],
        "answer": "San Francisco"
    },
    {
        "question": "Which one of the following pairs of Newspaper and Editor is <i>not</i> correctly matched ?",
        "options": [
            "Navjivan : Mahatma Gandhi",
            "Mahratta : Bal Gangadhar Tilak",
            "Bengalee : Surendranath Banerjea",
            "Voice of India : Gopal Krishna Gokhale"
        ],
        "answer": "Voice of India : Gopal Krishna Gokhale"
    },
    {
        "question": "Which one of the following was <i>not</i> included in the terms and conditions of Subsidiary Alliance System of Lord Wellesley ?",
        "options": [
            "The British would protect their ally.",
            "The ally was free to enter into agreements with other rulers or engage in warfare.",
            "In the territory of the ally, a British armed contingent would be stationed.",
            "The ally would have to provide resources for the maintenance of the British armed contingent."
        ],
        "answer": "The ally was free to enter into agreements with other rulers or engage in warfare."
    },
    {
        "question": "Which one of the following is an exhaustible but renewable natural resource ?",
        "options": [
            "Solar energy",
            "Water in usable condition",
            "Soil",
            "Landscape in its natural condition"
        ],
        "answer": "Water in usable condition"
    },
    {
        "question": "Recently, the term 'two-pillar solution/two-pillar package' often seen in the news, refers to",
        "options": [
            "Global energy security in near future",
            "International cyber crime reporting",
            "Minimum global corporate tax",
            "Prevention of international money laundering"
        ],
        "answer": "Minimum global corporate tax"
    },
    {
        "question": "Consider the following pairs of vaccine and category/type :<br/><ol><li>Covaxin : Inactivated pathogen-based vaccine</li><li>Covishield : mRNA vaccine</li><li>Sputnik V : Viral vector-based vaccine</li></ol><br/>Which of the pairs given above is/are correctly matched ?",
        "options": [
            "1 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        "answer": "1 and 3 only"
    },
    {
        "question": "What is 'Unicorn Company' often mentioned in Indian news ?",
        "options": [
            "Any privately held startup company with a value of over $ 1 billion",
            "Any public sector company to be merged with another public sector company",
            "Privatization of any loss-making State-owned company",
            "Any foreign multinational company doing business in India in collaboration with an Indian company"
        ],
        "answer": "Any privately held startup company with a value of over $ 1 billion"
    },
    {
        "question": "A global initiative popularly known as '30 &times; 30 target' is often seen in the news. Which one of the following statements best reflects this initiative ?",
        "options": [
            "At least 30% of the planet should be protected by 2030.",
            "At least 30% of the cultivated area should be brought under organic farming by 2030.",
            "At least 30% of the energy requirements should be met by renewable sources by 2030.",
            "At least 30% of the people below poverty line should be brought out of their poverty by 2030."
        ],
        "answer": "At least 30% of the planet should be protected by 2030."
    }

    ,

    {
        "question": "Which one of the following statements is correct regarding LOFAR (Low Frequency Array) ?",
        "options": [
            "It is the world's most powerful radio antenna.",
            "It is a space technology launched by NASA to discover exoplanets.",
            "It is an arrangement of satellites in space for the purpose of creating Satellite Navigation System.",
            "It is a wireless communication technology for 5G services."
        ],
        "answer": "It is the world's most powerful radio antenna."
    },
    {
        "question": "In the recently formed grouping of countries generally known as 'Middle-East Quad', in addition to India, which of the following are other members ?",
        "options": [
            "Egypt, Saudi Arabia and USA",
            "Israel, UAE and USA",
            "Egypt, UAE and UK",
            "Israel, Saudi Arabia and UK"
        ],
        "answer": "Israel, UAE and USA"
    },
    {
        "question": "The terms 'Pinaka and Smerch' mentioned in news recently refer to",
        "options": [
            "Cruise missiles",
            "Nuclear-powered submarines",
            "Rocket launcher systems",
            "Weaponised drones"
        ],
        "answer": "Rocket launcher systems"
    },
    {
        "question": "Which of the following statements is/are correct ?<br/><ol><li>India had accorded recognition to Bangladesh even before the liberation of Bangladesh in 1971.</li><li>In March 2021, both India and Bangladesh had decided to celebrate 6 December as Maitri Diwas.</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Both 1 and 2"
    },
    {
        "question": "Recently India signed a contract for the manufacture of nearly 6 lakh AK-203 rifles with which one of the following countries ?",
        "options": [
            "Canada",
            "Russia",
            "France",
            "Israel"
        ],
        "answer": "Russia"
    },
    {
        "question": "In December 2021, who among the following succeeded Angela Merkel as the Chancellor of Germany ?",
        "options": [
            "Olaf Scholz",
            "Annalena Baerbock",
            "Armin Laschet",
            "Jana Puglierin"
        ],
        "answer": "Olaf Scholz"
    },
    {
        "question": "Which of the following statements is/are correct ?<br/><ol><li>Nilamoni Phukan Jr. is the 56th Jnanpith Award winner.</li><li>Damodar Mauzo is the 57th Jnanpith Award winner.</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "Both 1 and 2"
    },
    {
        "question": "Which one of the following statements about Anil Menon is correct ?",
        "options": [
            "He is an engineer who revolutionised organic farming.",
            "He is a diplomat selected in a UN Peace-Keeping mission.",
            "He is a physician selected by NASA to be an astronaut.",
            "He is a star football player."
        ],
        "answer": "He is a physician selected by NASA to be an astronaut."
    },
    {
        "question": "India's maiden human space mission will be launched in 2023. What is its name ?",
        "options": [
            "Vayumitra",
            "Vikram",
            "Chandrayaan-3",
            "Gaganyaan"
        ],
        "answer": "Gaganyaan"
    },
    {
        "question": "Which one of the following teams won the Senior Women's National Football Championship, 2021 ?",
        "options": [
            "Manipur",
            "Railways",
            "West Bengal",
            "Odisha"
        ],
        "answer": "Manipur"
    },
    {
        "question": "Which of the following about Khijadiya Bird Sanctuary is/are correct ?<br/><ol><li>It is recently declared as a Ramsar Site (wetlands of international importance)</li><li>It is located in Uttar Pradesh</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        "answer": "1 only"
    },
    {
        "question": "Which one among the following countries has announced a plan that sets a goal of having fewer than 5% of its populace smoking by 2025 ?",
        "options": [
            "England",
            "Germany",
            "New Zealand",
            "Russia"
        ],
        "answer": "New Zealand"
    },
    {
        "question": "Who among the following won the FIDE World Chess Championship, 2021 ?",
        "options": [
            "Nepomniachtchi",
            "Magnus Carlsen",
            "Ding Liren",
            "Anish Giri"
        ],
        "answer": "Magnus Carlsen"
    },
    {
        "question": "With reference to Bhindawas Wildlife Sanctuary, Sultanpur National Park, Thol Lake Wildlife Sanctuary and Wadhwana Wetland, which of the following statements is/are correct ?<br/><ol><li>All of them are Ramsar sites.</li><li>All of them are naturally formed wetlands.</li><li>All of them are birding sites.</li></ol><br/>Select the correct answer using the code given below :",
        "options": [
            "1 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        "answer": "1 and 3 only"
    },
    {
        "question": "To study which one of the following was a spacecraft launched that would be farthest from the Sun and would run exclusively on solar power ?",
        "options": [
            "Jupiter's Trojan asteroids",
            "Saturn's rings and moons",
            "Mars' atmosphere",
            "Kuiper Belt and Oort Cloud"
        ],
        "answer": "Jupiter's Trojan asteroids"
    },
    {
        "question": "Recently, archaeological studies at which one among the following revealed that by 1200 BCE there was a flourishing agrarian civilization and the cultivation of rice was well-established at this place ?",
        "options": [
            "Raichur Doab",
            "Krishna Delta",
            "Vicinity of Vamsadhara river",
            "Vicinity of Thamirabarani river"
        ],
        "answer": "Vicinity of Thamirabarani river"
    }

    ],
    "2023-I_alt": [
        {
                "question": "If the magnification produced by a lens is +2, then the image is :",
                "options": [
                        "erect, virtual and smaller than the object.",
                        "inverted, real and smaller than the object.",
                        "erect, virtual and larger than the object.",
                        "inverted, real and larger than the object."
                ],
                "answer": "erect, virtual and larger than the object."
        },
        {
                "question": "What is the correct sequence of resistivity of silver, nichrome and glass at room temperature ?",
                "options": [
                        "Silver < Nichrome < Glass",
                        "Glass < Nichrome < Silver",
                        "Silver < Glass < Nichrome",
                        "Nichrome < Silver < Glass"
                ],
                "answer": "Silver < Nichrome < Glass"
        },
        {
                "question": "At the time of short-circuit, the current in the circuit :",
                "options": [
                        "reduces substantially.",
                        "does not change.",
                        "increases heavily.",
                        "keeps on fluctuating."
                ],
                "answer": "increases heavily."
        },
        {
                "question": "Which one of the following statements is <i>not</i> correct ?",
                "options": [
                        "An electric motor converts electrical energy into mechanical energy.",
                        "An electric generator works on the principle of electromagnetic induction.",
                        "The magnetic field at the centre of a long circular coil carrying current will be parallel straight lines.",
                        "A wire with a green insulation is usually the live wire of an electric supply."
                ],
                "answer": "A wire with a green insulation is usually the live wire of an electric supply."
        },
        {
                "question": "A boy completes one round of a circular track of diameter 200 m in 30 s. What will be the displacement at the end of 3 minutes and 45 seconds ?",
                "options": [
                        "50 m",
                        "100 m",
                        "200 m",
                        "236 m"
                ],
                "answer": "200 m"
        },
        {
                "question": "What happens to the gravitational force between two objects if the mass of one object is doubled and the distance between them is also doubled ?",
                "options": [
                        "The force would remain the same",
                        "The force would be doubled",
                        "The force would be halved",
                        "The force would increase by a factor of 4"
                ],
                "answer": "The force would be halved"
        },
        {
                "question": "The number of moles of oxygen gas used in the complete combustion of 1 mole of glucose is :",
                "options": [
                        "1",
                        "3",
                        "6",
                        "12"
                ],
                "answer": "6"
        },
        {
                "question": "Which one of the following is <i>not</i> an example of an oxidation reaction ?",
                "options": [
                        "The taste of butter changes if left for a longer period",
                        "A white substance is formed when an aqueous solution of barium chloride is mixed with sodium sulphate solution",
                        "A reddish-brown powder gets coated on articles made of iron",
                        "Wine gets sour with time"
                ],
                "answer": "A white substance is formed when an aqueous solution of barium chloride is mixed with sodium sulphate solution"
        },
        {
                "question": "Methanoic acid is normally found in :",
                "options": [
                        "muscles",
                        "urine",
                        "ant stings",
                        "human brain"
                ],
                "answer": "ant stings"
        },
        {
                "question": "What is the number of moles of 'He' in 104 g of helium gas ?",
                "options": [
                        "52",
                        "26",
                        "13",
                        "6.5"
                ],
                "answer": "26"
        },
        {
                "question": "While burning hydrocarbon fuels, if we see a yellow flame with lots of black smoke, it means that the fuel is :",
                "options": [
                        "made of saturated hydrocarbons.",
                        "made of unsaturated hydrocarbons.",
                        "burning completely.",
                        "wet."
                ],
                "answer": "made of unsaturated hydrocarbons."
        },
        {
                "question": "The number of saturated and unsaturated bonds in cyclohexane are :",
                "options": [
                        "9 and 0 respectively.",
                        "18 and 3 respectively.",
                        "18 and 0 respectively.",
                        "9 and 3 respectively."
                ],
                "answer": "18 and 0 respectively."
        },
        {
                "question": "Which one of the following statements is true when non-metals are dissolved in water ?",
                "options": [
                        "They produce basic oxides.",
                        "They produce acidic oxides.",
                        "They produce neutral oxides.",
                        "They provide hydroxides."
                ],
                "answer": "They produce acidic oxides."
        },
        {
                "question": "Which one of the following statements is <i>not</i> correct with regard to genetically modified organisms ?",
                "options": [
                        "In this technique a gene from one organism is isolated and transferred to the cell of another organism.",
                        "This technique has applications only in plants.",
                        "Genes for insect resistance may spread from crop plants to wild plants.",
                        "To produce a transgenic animal the novel genes are inserted at a very early stage of development."
                ],
                "answer": "This technique has applications only in plants."
        },
        {
                "question": "Suppose, due to an accident, the delicate lining of the mouth and the oesophagus of a person is injured. In this case, which one of the following tissues will be affected ?",
                "options": [
                        "Smooth muscle",
                        "Cuboidal epithelium",
                        "Squamous epithelium",
                        "Striated muscle"
                ],
                "answer": "Squamous epithelium"
        },
        {
                "question": "Which one of the following statements is correct about the cell membrane ?",
                "options": [
                        "It is made up of cellulose.",
                        "It is a permeable structure for all substances.",
                        "It is flexible and enables the cell to engulf many materials.",
                        "It does not allow diffusion of gases like oxygen and carbon dioxide."
                ],
                "answer": "It is flexible and enables the cell to engulf many materials."
        },
        {
                "question": "Plants prepare glucose in the process of :",
                "options": [
                        "respiration",
                        "photosynthesis",
                        "degradation",
                        "mineral absorption"
                ],
                "answer": "photosynthesis"
        },
        {
                "question": "The disease rickets develops in children due to the deficiency of :",
                "options": [
                        "Vitamin C",
                        "Vitamin D",
                        "Vitamin A",
                        "Vitamin B"
                ],
                "answer": "Vitamin D"
        },
        {
                "question": "Match List I with List II and select the correct answer using the code given below the lists :<br/><br/><b>List I (Blood Vessel)</b><br/>A. Pulmonary artery<br/>B. Capillaries<br/>C. Coronary artery<br/>D. Pulmonary vein<br/><br/><b>List II (Function)</b><br/>1. Carries blood from lungs to heart<br/>2. Carries blood to heart muscle<br/>3. Connection between arteries and veins<br/>4. Carries blood from heart to lungs",
                "options": [
                        "A-4, B-3, C-2, D-1",
                        "A-4, B-2, C-3, D-1",
                        "A-1, B-2, C-3, D-4",
                        "A-1, B-3, C-2, D-4"
                ],
                "answer": "A-4, B-3, C-2, D-1"
        },
        {
                "question": "Which one of the following statements is true with regard to a greenhouse ?",
                "options": [
                        "The shorter wavelength infrared radiations from the Sun can enter into the greenhouse while longer wavelength infrared radiations from the ground and the plants inside the greenhouse cannot pass back out through the glass.",
                        "The shorter wavelength infrared radiations from the Sun can enter into the greenhouse and the longer wavelength infrared radiations from the ground and the plants inside the greenhouse can also pass back out through the glass.",
                        "The shorter wavelength infrared radiations from the Sun cannot enter into the greenhouse while longer wavelength infrared radiations from the ground and the plants inside the greenhouse can pass back out through the glass.",
                        "No infrared radiation can pass through the glass of the greenhouse."
                ],
                "answer": "The shorter wavelength infrared radiations from the Sun can enter into the greenhouse while longer wavelength infrared radiations from the ground and the plants inside the greenhouse cannot pass back out through the glass."
        },
        {
                "question": "An object weighs 9 N on the surface of the Earth. What would be its weight, when measured on the surface of a planet where the acceleration due to gravity is 9 times that on the surface of the Earth ?",
                "options": [
                        "The weight would remain the same",
                        "The weight would be equal to 1 N",
                        "The weight would become 9 times",
                        "The weight will be reduced to 1/9 N"
                ],
                "answer": "The weight would become 9 times"
        },
        {
                "question": "The twinkling of a star is due to :",
                "options": [
                        "atmospheric reflection of starlight.",
                        "atmospheric refraction of starlight.",
                        "continuous change in the position of the star.",
                        "oscillation of starlight."
                ],
                "answer": "atmospheric refraction of starlight."
        },
        {
                "question": "A convex lens has a focal length of 15 cm. At what distance should an object be placed in front of the lens to get a real image of the same size of the object ?",
                "options": [
                        "15 cm",
                        "10 cm",
                        "30 cm",
                        "40 cm"
                ],
                "answer": "30 cm"
        },
        {
                "question": "Which one of the following statements about biogas is <i>not</i> correct ?",
                "options": [
                        "It is mainly composed of methane gas.",
                        "It is a non-renewable source of energy.",
                        "It is formed by the decomposition of cow dung in the absence of oxygen.",
                        "It burns without smoke and leaves no residue."
                ],
                "answer": "It is a non-renewable source of energy."
        },
        {
                "question": "Which of the following mineral acids is found in human stomach ?",
                "options": [
                        "Hydrochloric acid",
                        "Lactic acid",
                        "Uric acid",
                        "Methanoic acid"
                ],
                "answer": "Hydrochloric acid"
        },
        {
                "question": "Which one of the following living organisms gives litmus ?",
                "options": [
                        "Protozoa",
                        "Virus",
                        "Lichen",
                        "Saccharomyces"
                ],
                "answer": "Lichen"
        },
        {
                "question": "Which one of the following is the main reason of acid rains ?",
                "options": [
                        "Dissolution of sulphur and nitrogen oxides in rain",
                        "Dissolution of minerals in rain",
                        "Dissolution of dust particles in rain",
                        "Dissolution of soil solution in rain"
                ],
                "answer": "Dissolution of sulphur and nitrogen oxides in rain"
        },
        {
                "question": "Mutation in a virus is caused due to a change in its :",
                "options": [
                        "cell size.",
                        "genetic material.",
                        "shape.",
                        "colour."
                ],
                "answer": "genetic material."
        },
        {
                "question": "Yeast, which is used to make bread, belongs to the group :",
                "options": [
                        "Protista",
                        "Fungi",
                        "Monera",
                        "Protozoa"
                ],
                "answer": "Fungi"
        },
        {
                "question": "Hyphae are :",
                "options": [
                        "produced by yeast.",
                        "thin threads formed by many fungi.",
                        "reproductive cells.",
                        "responsible for preventing the cell from losing water in wet conditions."
                ],
                "answer": "thin threads formed by many fungi."
        },
        {
                "question": "Which one of the following is the first urban settlement in the world to reach a population size of one million (million-plus city) ?",
                "options": [
                        "London",
                        "Paris",
                        "New York",
                        "Washington D.C."
                ],
                "answer": "London"
        },
        {
                "question": "Which one of the following climatic types (Köppen's Scheme) is best suited to describe the climate of the western fringe of Rajasthan ?",
                "options": [
                        "Amw",
                        "Aw",
                        "Bwhw",
                        "Cwg"
                ],
                "answer": "Bwhw"
        },
        {
                "question": "Where are the Bermuda Islands located ?",
                "options": [
                        "Caribbean Sea",
                        "North Atlantic Ocean",
                        "Gulf of Mexico",
                        "Mediterranean Sea"
                ],
                "answer": "North Atlantic Ocean"
        },
        {
                "question": "Which one of the following States/Union Territories has the highest percentage of forest area to the total geographical area ?",
                "options": [
                        "Arunachal Pradesh",
                        "Lakshadweep",
                        "Nagaland",
                        "Mizoram"
                ],
                "answer": "Lakshadweep"
        },
        {
                "question": "In India, the period of steady population growth refers to the decade(s) of :",
                "options": [
                        "1981 - 2011",
                        "1951 - 1981",
                        "1921 - 1951",
                        "1911 - 1921"
                ],
                "answer": "1921 - 1951"
        },
        {
                "question": "Manikaran in Himachal Pradesh is known for :",
                "options": [
                        "Solar energy.",
                        "Geothermal energy.",
                        "Bioenergy.",
                        "Wind energy."
                ],
                "answer": "Geothermal energy."
        },
        {
                "question": "Who among the following, first mooted the idea of deficit financing ?",
                "options": [
                        "Adam Smith",
                        "Alfred Marshall",
                        "John Maynard Keynes",
                        "Milton Friedman"
                ],
                "answer": "John Maynard Keynes"
        },
        {
                "question": "Which of the following is/are the function(s) of environment ?<br/><br/>1. Supplying resources<br/>2. Sustaining life<br/>3. Providing aesthetic services<br/><br/>Select the correct answer using the code given below :",
                "options": [
                        "1 only",
                        "2 and 3 only",
                        "1, 2 and 3",
                        "1 and 3 only"
                ],
                "answer": "1, 2 and 3"
        },
        {
                "question": "Who among the following formulated the concept of poverty as a measurable development indicator in the Indian subcontinent ?",
                "options": [
                        "Dadabhai Naoroji",
                        "Romesh Chandra Dutt",
                        "V.K.R.V. Rao",
                        "M. Ranade"
                ],
                "answer": "Dadabhai Naoroji"
        },
        {
                "question": "Which one of the following terms denotes the inputs in terms of tools, machines, buildings, raw materials and money in hand required at any stage of production ?",
                "options": [
                        "Fixed capital",
                        "Working capital",
                        "Physical capital",
                        "Human capital"
                ],
                "answer": "Physical capital"
        }
],
    "2022-II": [
        {
                "question": "The term 'Thermal High Altitude Area Defense', sometimes mentioned in news, refers to",
                "options": [
                        "Anti-Missile system.",
                        "Air-launched cruise missile.",
                        "Aircraft navigation system.",
                        "Surface-to-air guided weapon."
                ],
                "answer": "Anti-Missile system."
        },
        {
                "question": "With reference to BrahMos missile, consider the following statements :<br/><br/>1. It has a flight range of up to 290 km.<br/>2. It is capable of attaining a speed of 2.8 Mach.<br/>3. Its cruising altitude could be up to 30 km.<br/><br/>Which of the statements given above is/are correct ?",
                "options": [
                        "1 and 2",
                        "2 only",
                        "1 and 3",
                        "3 only"
                ],
                "answer": "1 and 2"
        },
        {
                "question": "Which one of the following is <i>not</i> a category under which the President of India nominates Members of Parliament ?",
                "options": [
                        "Literature",
                        "Science",
                        "Art",
                        "State Service"
                ],
                "answer": "State Service"
        },
        {
                "question": "India is still a young country as the median age of its population is",
                "options": [
                        "Less than 25 years",
                        "Between 25 to 30 years",
                        "Between 30 to 35 years",
                        "Between 35 to 40 years"
                ],
                "answer": "Between 25 to 30 years"
        },
        {
                "question": "Blue Helmets are",
                "options": [
                        "United Nations Peacekeepers",
                        "Violent Non-State Actors",
                        "Civil Society Organisations",
                        "Environmental Organisations"
                ],
                "answer": "United Nations Peacekeepers"
        },
        {
                "question": "Which one of the following central features is <i>not</i> associated with Capitalist Economy ?",
                "options": [
                        "There is generalised commodity production - it has market value.",
                        "Productive wealth is held predominantly in private hands.",
                        "Economic life is organised according to market principles.",
                        "Economic organisation is based on planning, a supposedly rational process of resource allocation."
                ],
                "answer": "Economic organisation is based on planning, a supposedly rational process of resource allocation."
        },
        {
                "question": "Which among the following is <i>not</i> the strength or chief benefit of Bicameralism ?",
                "options": [
                        "Second chambers check the first chambers and prevent majoritarian rule.",
                        "It checks the powers of the executive.",
                        "The second chambers can act as a constitutional safeguard.",
                        "It often acts as a check on democratic rule, particularly when their members are non-elected or indirectly elected."
                ],
                "answer": "It often acts as a check on democratic rule, particularly when their members are non-elected or indirectly elected."
        },
        {
                "question": "The Insolvency and Bankruptcy Board of India (IBBI) was established in the year",
                "options": [
                        "2014",
                        "2015",
                        "2016",
                        "2017"
                ],
                "answer": "2016"
        },
        {
                "question": "Which one of the following is the other term used for 'Focus' in relation with an earthquake ?",
                "options": [
                        "Hypocentre",
                        "Epicentre",
                        "Isocentre",
                        "Principal Point"
                ],
                "answer": "Hypocentre"
        },
        {
                "question": "Which one of the following is <i>not</i> a mountain peak of the Andaman and Nicobar Islands ?",
                "options": [
                        "Saddle Peak",
                        "Mount Thuillier",
                        "Lhotse Peak",
                        "Mount Diavolo"
                ],
                "answer": "Lhotse Peak"
        },
        {
                "question": "Match List I with List II and select the correct answer using the code given below the Lists :<br/><br/><b>List I (Cloud Form)</b><br/>A. Cirrus<br/>B. Cumulus<br/>C. Nimbostratus<br/>D. Stratus<br/><br/><b>List II (Characteristic)</b><br/>1. Storm clouds<br/>2. High fog \"Low Ceiling\"<br/>3. Fair-weather clouds<br/>4. Entirely of ice particles",
                "options": [
                        "A-2, B-1, C-3, D-4",
                        "A-2, B-3, C-1, D-4",
                        "A-4, B-3, C-1, D-2",
                        "A-4, B-1, C-3, D-2"
                ],
                "answer": "A-4, B-3, C-1, D-2"
        },
        {
                "question": "Which one among the following planets has the largest number of known satellites ?",
                "options": [
                        "Mars",
                        "Neptune",
                        "Jupiter",
                        "Saturn"
                ],
                "answer": "Saturn"
        },
        {
                "question": "Who among the following usurped power in Kanyakubja after the death of Harshavardhana ?",
                "options": [
                        "Adityasena",
                        "Arunashva",
                        "Shashanka",
                        "Lalitaditya"
                ],
                "answer": "Arunashva"
        },
        {
                "question": "The legend of Prahlad and his father Hiranyakashyap was first set out in the",
                "options": [
                        "Bhagwat Purana",
                        "Vishnu Purana",
                        "Vamana Purana",
                        "Agni Purana"
                ],
                "answer": "Vishnu Purana"
        },
        {
                "question": "Which one of the following statements on the issue of ownership according to Smriti literature is <i>not</i> correct ?",
                "options": [
                        "The paternal estate was to be divided equally amongst sons.",
                        "Women were allowed to retain the gifts they received on the occasion of their marriage.",
                        "The gifts to women on the occasion of their marriage were known as Stridhana.",
                        "Stridhana was not inherited by the children without the permission of the husband."
                ],
                "answer": "Stridhana was not inherited by the children without the permission of the husband."
        },
        {
                "question": "Who among the following was <i>not</i> a woman labour leader who organised workers in the strikes in the 1920s ?",
                "options": [
                        "Sarala Devi Chaudhurani",
                        "Ushabai Dange",
                        "Prabhavati Devi",
                        "Anasuya Behn"
                ],
                "answer": "Sarala Devi Chaudhurani"
        },
        {
                "question": "Among the following countries, where did the idea of 'Social Market Economy' emerge in 1950s ?",
                "options": [
                        "Germany",
                        "France",
                        "United States of America",
                        "United Kingdom"
                ],
                "answer": "Germany"
        },
        {
                "question": "Who among the following Indian thinkers first spoke of food-for-work programmes to counteract the effects of famines ?",
                "options": [
                        "Kautilya",
                        "Aryabhatta",
                        "Chandragomin",
                        "Prabhakara"
                ],
                "answer": "Kautilya"
        },
        {
                "question": "The 'Ramsar Convention' relates to which one of the following areas ?",
                "options": [
                        "Wetland preservation",
                        "Promote afforestation",
                        "Action plan on climate change",
                        "Combat desertification"
                ],
                "answer": "Wetland preservation"
        },
        {
                "question": "Which one among the following reports defines Sustainable Development as development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs ?",
                "options": [
                        "Brundtland Report",
                        "United Nations Human Development Report",
                        "Agenda-21 of the Rio Earth Summit",
                        "OECD Policy Brief (2006)"
                ],
                "answer": "Brundtland Report"
        }
,
        {
                "question": "Match List I with List II and select the correct answer using the code given below the Lists :<br/><br/><b>List I (Literary Work)</b><br/>A. Duta Ghatotkacha<br/>B. Mrichchhakatikam<br/>C. Kiratarjuniyam<br/>D. Ravanavadha<br/><br/><b>List II (Author)</b><br/>1. Bhatti<br/>2. Bhasa<br/>3. Shudraka<br/>4. Bharavi",
                "options": [
                        "A-1, B-3, C-4, D-2",
                        "A-1, B-4, C-3, D-2",
                        "A-2, B-3, C-4, D-1",
                        "A-2, B-4, C-3, D-1"
                ],
                "answer": "A-2, B-3, C-4, D-1"
        },
        {
                "question": "At the banks of which of the following rivers was the Battle of Ten Kings fought in the Early Vedic Period ?",
                "options": [
                        "Sarasvati",
                        "Drishadvati",
                        "Parushni",
                        "Shutudri"
                ],
                "answer": "Parushni"
        },
        {
                "question": "The Bengal Famine of 1769-70 was worsened by",
                "options": [
                        "Locust attacks",
                        "Rat infestation",
                        "High levels of taxation",
                        "Smallpox epidemic"
                ],
                "answer": "Smallpox epidemic"
        },
        {
                "question": "Which one of the following is <i>not</i> the work of Ashvaghosha ?",
                "options": [
                        "Sariputraprakarana",
                        "Buddhacharita",
                        "Saundarananda",
                        "Manjushrimulakalpa"
                ],
                "answer": "Manjushrimulakalpa"
        },
        {
                "question": "Fat in human body is stored in",
                "options": [
                        "Adipose tissue",
                        "Red blood cells",
                        "Muscle tissue",
                        "Epithelial tissue"
                ],
                "answer": "Adipose tissue"
        },
        {
                "question": "Which one of the following is a feature of Membrane ?",
                "options": [
                        "Bilayer of phospholipid molecule in which proteins and cholesterol are embedded",
                        "Bilayer of proteins molecule in which lipid and cholesterol are embedded",
                        "Bilayer of neutral lipid in which proteins and cholesterol are embedded",
                        "Bilayer of neutral lipid lacking cholesterol and proteins"
                ],
                "answer": "Bilayer of phospholipid molecule in which proteins and cholesterol are embedded"
        },
        {
                "question": "Which one of the following parts of human alimentary canal can be of maximum length ?",
                "options": [
                        "Stomach",
                        "Small intestine",
                        "Large intestine",
                        "Rectum"
                ],
                "answer": "Small intestine"
        },
        {
                "question": "While forming the 'Indo-Pacific Economic Framework for Prosperity', the member countries launched collective discussions towards future negotiations on four pillars. Which one of the following is <i>not</i> one of those pillars ?",
                "options": [
                        "Clean energy, decarbonisation and infrastructure",
                        "Defence cooperation and intelligence sharing",
                        "Supply chain",
                        "Tax and anti-corruption"
                ],
                "answer": "Defence cooperation and intelligence sharing"
        },
        {
                "question": "The regions known as Donetsk and Luhansk are sometimes mentioned in the news. They are the separatist regions of",
                "options": [
                        "Ethiopia",
                        "Sudan",
                        "Ukraine",
                        "Yemen"
                ],
                "answer": "Ukraine"
        },
        {
                "question": "Recently which of the following countries were placed in the 'Grey List' of Financial Action Task Force ?",
                "options": [
                        "Bolivia and Mozambique",
                        "Colombia and Ecuador",
                        "Iraq and Qatar",
                        "Turkey and UAE"
                ],
                "answer": "Turkey and UAE"
        },
        {
                "question": "Which one of the following assists a country through 'Extended Fund Facility', often talked about in news ?",
                "options": [
                        "International Fund for Agricultural Development",
                        "International Monetary Fund",
                        "International Bank for Reconstruction and Development",
                        "United Nations Development Programme"
                ],
                "answer": "International Monetary Fund"
        },
        {
                "question": "The terms 'Ethereum, Solana, Polkadot and Tether', sometimes mentioned in the news, refer to",
                "options": [
                        "Cryptocurrencies",
                        "Earth Observation Satellites",
                        "Hypersonic Cruise Missiles",
                        "Virtual Private Network Service Providers"
                ],
                "answer": "Cryptocurrencies"
        },
        {
                "question": "In which one of the following States has the President's Rule been imposed most number of times ?",
                "options": [
                        "Bihar",
                        "Karnataka",
                        "Manipur",
                        "Punjab"
                ],
                "answer": "Manipur"
        },
        {
                "question": "The use of 'Electors Photo Identity Cards (EPIC)' by the Election Commission of India was started in which one of the following years ?",
                "options": [
                        "1992",
                        "1993",
                        "1995",
                        "2001"
                ],
                "answer": "1993"
        },
        {
                "question": "Which one of the following best describes the electoral system to elect the President of India ?",
                "options": [
                        "Proportional Representation",
                        "Proportional Representation and Single Transferable Vote System",
                        "First-Past-the-Post System",
                        "List System"
                ],
                "answer": "Proportional Representation and Single Transferable Vote System"
        },
        {
                "question": "Which one of the following statements about Money Bill is <i>not</i> correct ?",
                "options": [
                        "Money Bill cannot be introduced in the Council of States.",
                        "The Council of States has no power to reject or amend the Money Bill.",
                        "The Speaker of the Lok Sabha has the sole and final power in deciding whether a Bill is a Money Bill or otherwise.",
                        "The Council of States has no power to discuss the Money Bill."
                ],
                "answer": "The Council of States has no power to discuss the Money Bill."
        },
        {
                "question": "Which of the following States has/have bicameral legislature ?<br/><br/>1. Andhra Pradesh<br/>2. Telangana<br/>3. Bihar<br/>4. Uttar Pradesh<br/><br/>Select the correct answer using the code given below :",
                "options": [
                        "1 only",
                        "1, 2 and 3 only",
                        "3 and 4 only",
                        "1, 2, 3 and 4"
                ],
                "answer": "1, 2, 3 and 4"
        },
        {
                "question": "By which one of the following Constitutional Amendment Acts, was the Article 21A (Right to Education) inserted into the Constitution of India ?",
                "options": [
                        "83rd Amendment Act",
                        "84th Amendment Act",
                        "85th Amendment Act",
                        "86th Amendment Act"
                ],
                "answer": "86th Amendment Act"
        },
        {
                "question": "An object is dropped from a height onto the floor. Which one of the following remains uniform as it falls ?",
                "options": [
                        "Its acceleration",
                        "Its momentum",
                        "Its kinetic energy",
                        "Its potential energy"
                ],
                "answer": "Its acceleration"
        },
        {
                "question": "If an object is placed at the focus of a convex lens, its image is",
                "options": [
                        "at the focus on the same side.",
                        "at the focus on the opposite side.",
                        "coincident with the lens.",
                        "at infinity."
                ],
                "answer": "at infinity."
        },
        {
                "question": "Which one of the following statements about the aperture of a convex lens is correct ?",
                "options": [
                        "It is equal to its radius of curvature.",
                        "It is equal to its focal length.",
                        "It is independent of its radius of curvature.",
                        "It is equal to half of its focal length."
                ],
                "answer": "It is independent of its radius of curvature."
        },
        {
                "question": "When water is heated from 0°C to 4°C, its density",
                "options": [
                        "remains constant.",
                        "increases.",
                        "decreases.",
                        "first increases then decreases to its original value."
                ],
                "answer": "increases."
        },
        {
                "question": "The acceleration due to gravity at the Earth's surface depends on",
                "options": [
                        "its mass only.",
                        "its radius only.",
                        "both its mass and radius.",
                        "either its mass or its radius."
                ],
                "answer": "both its mass and radius."
        },
        {
                "question": "In which one of the following highlands of India can you find temperate forests called 'Sholas' ?",
                "options": [
                        "Nilgiris",
                        "Vindhyas",
                        "Satpuras",
                        "Himalayas"
                ],
                "answer": "Nilgiris"
        },
        {
                "question": "'Pingos' are associated with which one of the following process ?",
                "options": [
                        "Glacial",
                        "Peri-glacial",
                        "Aeolian",
                        "Fluvial"
                ],
                "answer": "Peri-glacial"
        },
        {
                "question": "Match List I with List II and select the correct answer using the code given below the Lists :<br/><br/><b>List I (Drainage Pattern of River)</b><br/>A. Insequent<br/>B. Consequent<br/>C. Subsequent<br/>D. Resequent<br/><br/><b>List II (Feature)</b><br/>1. Whose direction of flow is controlled by the rock structure<br/>2. No apparent reason why it follows the path it takes<br/>3. Flow in the same direction as the consequent stream but at a lower level<br/>4. Whose course is determined by the original slope of the land",
                "options": [
                        "A-2, B-1, C-4, D-3",
                        "A-2, B-4, C-1, D-3",
                        "A-3, B-4, C-1, D-2",
                        "A-3, B-1, C-4, D-2"
                ],
                "answer": "A-2, B-4, C-1, D-3"
        },
        {
                "question": "Which one of the following processes leads to expansion of certain minerals as they take up water, causing additional stress in the rock ?",
                "options": [
                        "Hydrolysis",
                        "Hydration",
                        "Oxidation",
                        "Carbonation"
                ],
                "answer": "Hydration"
        },
        {
                "question": "The Indian desert also known as <i>Marusthali</i> is believed to be under the sea during which one of the following eras ?",
                "options": [
                        "Cenozoic era",
                        "Palaeozoic era",
                        "Mesozoic era",
                        "Archaean and Pre-Cambrian era"
                ],
                "answer": "Mesozoic era"
        },
        {
                "question": "Which among the following are Charvaka Schools of Philosophy ?<br/><br/>1. Dhurtta<br/>2. Nyaya<br/>3. Sushikshita<br/>4. Vaisheshika<br/><br/>Select the correct answer using the code given below :",
                "options": [
                        "1, 2 and 3",
                        "2 and 3 only",
                        "2 and 4 only",
                        "1 and 3 only"
                ],
                "answer": "1 and 3 only"
        },
        {
                "question": "During the 8th - 14th centuries, in the Sanskrit texts and inscriptions, which of the following terms were used to denote Muslims ?<br/><br/>1. Turushka<br/>2. Tajika<br/>3. Parashika<br/>4. Kardamaka<br/><br/>Select the correct answer using the code given below :",
                "options": [
                        "1, 2 and 3",
                        "1, 2 and 4",
                        "2 and 3 only",
                        "1, 3 and 4"
                ],
                "answer": "1, 2 and 3"
        },
        {
                "question": "In the citadel and lower-town areas of which one of the following Harappan cities, have several large cisterns and reservoirs been found ?",
                "options": [
                        "Banawali",
                        "Mohenjodaro",
                        "Dholavira",
                        "Rakhigarhi"
                ],
                "answer": "Dholavira"
        },
        {
                "question": "Consider the following statements about cavalry warfare in India :<br/><br/>1. The iron stirrup made it possible for the armoured warrior to sit firmly on a horse without falling off.<br/>2. The iron stirrup also allowed a cavalry charge with lances held tightly to the body, without the rider being thrown off by the shock of impact.<br/><br/>Which of the statements given above is/are correct ?",
                "options": [
                        "1 only",
                        "2 only",
                        "Both 1 and 2",
                        "Neither 1 nor 2"
                ],
                "answer": "Both 1 and 2"
        },
        {
                "question": "The British policy towards Afghanistan in the first half of the 19th century aimed at",
                "options": [
                        "Strengthening Afghanistan as a buffer against Russia.",
                        "Weakening Russian influence in Afghanistan but not promoting a strong Afghanistan either.",
                        "Promoting Russian influence in Afghanistan to control insurgent tribal leaders.",
                        "Annexing Afghanistan as a directly-controlled British Territory."
                ],
                "answer": "Strengthening Afghanistan as a buffer against Russia."
        },
        {
                "question": "Recently, the United Nations agreed to change the name of which one of the following countries ?",
                "options": [
                        "Algeria",
                        "Jordan",
                        "Morocco",
                        "Turkey"
                ],
                "answer": "Turkey"
        },
        {
                "question": "The SWIFT (The Society for Worldwide Interbank Financial Telecommunication) frequently mentioned in news, is essentially a",
                "options": [
                        "Global financial intelligence agency",
                        "Global terror finance detection system",
                        "Global money transfer system",
                        "Global stock-market information sharing system"
                ],
                "answer": "Global money transfer system"
        },
        {
                "question": "P-75 I (or P-75 India) project refers to manufacture of",
                "options": [
                        "Diesel-electric submarines.",
                        "Nuclear-powered submarines.",
                        "Aircraft carrier warships.",
                        "Field guns."
                ],
                "answer": "Diesel-electric submarines."
        }
,
        {
                "question": "The Dutch were defeated by Marthanda Varma of Travancore Kingdom in the battle of",
                "options": [
                        "Wandiwash",
                        "Rakshasi - Tangadi",
                        "Pullalur",
                        "Colachel"
                ],
                "answer": "Colachel"
        },
        {
                "question": "To which one of the following schools of philosophy did Kumarila Bhatta and Prabhakara belong ?",
                "options": [
                        "Lokayata",
                        "Madhyamika",
                        "Purva-Mimamsa",
                        "Uttara-Mimamsa"
                ],
                "answer": "Purva-Mimamsa"
        },
        {
                "question": "The <i>Tolkappiyam</i> is",
                "options": [
                        "A work of grammar.",
                        "A Tamil poem in praise of Rajendra Chola.",
                        "An ancient didactic work in Tamil.",
                        "A drama composed by a Chera King."
                ],
                "answer": "A work of grammar."
        },
        {
                "question": "On the banks of which one of the following rivers was the ancient Mahishmati located ?",
                "options": [
                        "Sarayu",
                        "Son",
                        "Narmada",
                        "Godavari"
                ],
                "answer": "Narmada"
        },
        {
                "question": "Which one of the following statements about the Public Accounts Committee (PAC) of the Parliament is <i>not</i> correct ?",
                "options": [
                        "It examines the Finance Accounts of the Government of India.",
                        "Fifteen members of the Committee are elected by the Lok Sabha from amongst its members.",
                        "The Chairperson of the Committee is elected by its members.",
                        "In case a member of any other Committee constituted by the Government is elected to the PAC, the Speaker of the Lok Sabha decides whether he should continue to be a member of the former Committee."
                ],
                "answer": "The Chairperson of the Committee is elected by its members."
        },
        {
                "question": "Consider the following :<br/><br/>1. M.A. Ayyangar<br/>2. G.S. Dhillon<br/>3. Balram Jakhar<br/>4. P.A. Sangma<br/><br/>How many of them were the Speaker of the Lok Sabha ?",
                "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                ],
                "answer": "4"
        },
        {
                "question": "Consider the following pairs of Schedule and Content of the Constitution of India :<br/><br/>1. First Schedule : Forms of Oaths or Affirmations<br/>2. Third Schedule : Allocation of seats in the Council of States<br/>3. Fifth Schedule : Provisions related to the administration of Scheduled Areas and Scheduled Tribes<br/>4. Ninth Schedule : Provisions related to the administration of tribal areas in certain States<br/><br/>How many of the above pairs is/are correctly matched ?",
                "options": [
                        "1",
                        "2",
                        "3",
                        "4"
                ],
                "answer": "1"
        },
        {
                "question": "Which one of the following statements is correct ?",
                "options": [
                        "Under Article 21A of the Constitution of India, the State shall provide free and compulsory education to all children up to the age of eleven years.",
                        "Every religious denomination has got absolute power under Article 26 of the Constitution of India to manage its own affairs in matters of religion.",
                        "Only religious and linguistic minorities find mention in Article 30 of the Constitution of India in reference to the right to establish educational institutions of their choice.",
                        "Parliament cannot empower, even by law, any court other than the Supreme Court of India the power to issue writs within local limits of its jurisdiction."
                ],
                "answer": "Only religious and linguistic minorities find mention in Article 30 of the Constitution of India in reference to the right to establish educational institutions of their choice."
        },
        {
                "question": "Which one of the following do <i>not</i> influence the ocean currents ?",
                "options": [
                        "Heating by solar energy",
                        "Wind",
                        "Gravitational pull by Sun and Moon",
                        "Coriolis force"
                ],
                "answer": "Gravitational pull by Sun and Moon"
        },
        {
                "question": "Which one of the following sedimentary rocks has <i>not</i> been formed mechanically ?",
                "options": [
                        "Sandstone",
                        "Conglomerate",
                        "Loess",
                        "Geyserites"
                ],
                "answer": "Geyserites"
        },
        {
                "question": "Which of the following statements about inversion of temperature is/are correct ?<br/><br/>1. Temperature increases with increasing altitude.<br/>2. A long winter night with clear skies is an ideal situation.<br/>3. It is a short term phenomenon and is common all over the globe except at the poles.<br/><br/>Select the correct answer using the code given below :",
                "options": [
                        "1 and 2 only",
                        "2 and 3 only",
                        "1 only",
                        "1, 2 and 3"
                ],
                "answer": "1 and 2 only"
        },
        {
                "question": "In which one of the following States/UT, is the Lake Tsomgo located ?",
                "options": [
                        "Ladakh",
                        "Himachal Pradesh",
                        "Sikkim",
                        "Uttarakhand"
                ],
                "answer": "Sikkim"
        },
        {
                "question": "Which of the following statements about the coasts of India is/are correct ?<br/><br/>1. The West Coast of India is a high rocky, retreating coast.<br/>2. The West Coast of India is dominated by erosional landforms.<br/>3. The East Coast of India, however, is a low sedimentary coast exhibiting depositional forms.<br/><br/>Select the correct answer using the code given below :",
                "options": [
                        "1 and 2 only",
                        "2 and 3 only",
                        "1 only",
                        "1, 2 and 3"
                ],
                "answer": "1, 2 and 3"
        },
        {
                "question": "Which one of the following States/UTs has the largest area under Coral Reefs in India ?",
                "options": [
                        "Gujarat",
                        "Tamil Nadu",
                        "Andaman and Nicobar Islands",
                        "Lakshadweep"
                ],
                "answer": "Andaman and Nicobar Islands"
        },
        {
                "question": "Which one of the following is considered as an agency function of commercial banks in India ?",
                "options": [
                        "Acceptance of deposits",
                        "Investment of surplus funds",
                        "Acceptance of income tax payments",
                        "Providing overdraft facilities"
                ],
                "answer": "Acceptance of income tax payments"
        },
        {
                "question": "Which one of the following forms of money supply is considered as the most widely used in the Indian monetary system ?",
                "options": [
                        "M1",
                        "M2",
                        "M3",
                        "M4"
                ],
                "answer": "M3"
        },
        {
                "question": "Which one of the following is the first State in India to have 100 percent households with tap water connection ?",
                "options": [
                        "Gujarat",
                        "Goa",
                        "Delhi",
                        "Andhra Pradesh"
                ],
                "answer": "Goa"
        },
        {
                "question": "Which one of the following Labour Codes notified by the Government of India incorporated various provisions of the Central Labour Acts such as the Factories Act, 1948 and Plantations Labour Act, 1951 ?",
                "options": [
                        "The Occupational Safety, Health and Working Conditions Code, 2020",
                        "The Industrial Relations Code, 2020",
                        "The Code on Wages, 2019",
                        "The Code on Social Security, 2020"
                ],
                "answer": "The Occupational Safety, Health and Working Conditions Code, 2020"
        },
        {
                "question": "If you were to browse a table of a recent period showing life expectancy at birth for all categories of rural-urban and male-female divisions for all States of India, you are <i>not</i> likely to observe that<br/><br/>1. Urban life expectancy is higher than the rural one.<br/>2. Male life expectancy is higher than the female one.<br/><br/>Select the correct answer using the code given below :",
                "options": [
                        "1 only",
                        "2 only",
                        "Both 1 and 2",
                        "Neither 1 nor 2"
                ],
                "answer": "2 only"
        },
        {
                "question": "Consider the following statements :<br/><br/>The Government is promoting the 'Kisan Drone' for<br/>1. Spraying weedicides.<br/>2. Digitisation of land records.<br/>3. Crop assessment.<br/><br/>Which of the statements given above is/are correct ?",
                "options": [
                        "1 and 2",
                        "2 and 3",
                        "1 only",
                        "1, 2 and 3"
                ],
                "answer": "1, 2 and 3"
        },
        {
                "question": "Recently launched 'Jan Samarth' portal",
                "options": [
                        "provides single point access for authenticated health information to citizens.",
                        "assists farmers to access links to useful farming-specific information.",
                        "provides access to Pan India e-Government services.",
                        "provides link to Government credit schemes."
                ],
                "answer": "provides link to Government credit schemes."
        },
        {
                "question": "Recently India commissioned its first liquid mirror telescope at",
                "options": [
                        "Himachal Pradesh",
                        "Uttarakhand",
                        "Ladakh",
                        "Arunachal Pradesh"
                ],
                "answer": "Uttarakhand"
        },
        {
                "question": "National Tribal Research Institute is situated at",
                "options": [
                        "Bilaspur",
                        "Raipur",
                        "Ranchi",
                        "New Delhi"
                ],
                "answer": "New Delhi"
        },
        {
                "question": "Avani Lekhara excels in which one of the following sports ?",
                "options": [
                        "Table Tennis",
                        "Cycling",
                        "Shooting",
                        "Boxing"
                ],
                "answer": "Shooting"
        },
        {
                "question": "The atmosphere of Planet Venus is made up of thick and yellowish clouds of",
                "options": [
                        "Chlorine",
                        "Sulphuric acid",
                        "Nitric acid",
                        "Bromine"
                ],
                "answer": "Sulphuric acid"
        },
        {
                "question": "A patient's abdomen (alimentary canal) can be examined by X-ray after administering which one of the following metal salts in the patient's meal ?",
                "options": [
                        "Barium sulphate",
                        "Barium chloride",
                        "Strontium sulphate",
                        "Magnesium chloride"
                ],
                "answer": "Barium sulphate"
        },
        {
                "question": "Storage of biological tissues such as blood, organs, semen requires low temperature which is achieved upon the usage of",
                "options": [
                        "Liquid nitrogen",
                        "Solid carbon dioxide",
                        "Liquid air",
                        "Helium"
                ],
                "answer": "Liquid nitrogen"
        },
        {
                "question": "In the joining of railway tracks, iron oxide is made to react with",
                "options": [
                        "Aluminium",
                        "Zinc",
                        "Copper",
                        "Tin"
                ],
                "answer": "Aluminium"
        },
        {
                "question": "What was a <i>munjaniq</i> in medieval period ?",
                "options": [
                        "Cannon",
                        "Catapult",
                        "Gun carriage",
                        "Portable armoury"
                ],
                "answer": "Catapult"
        }
,
            {
                    "question": "Which one of the following is the first and the oldest Government-owned coal mining company in India ?",
                    "options": [
                            "Neyveli Lignite Corporation",
                            "Singareni Collieries Company Limited",
                            "Coal India Limited",
                            "Mahanadi Coalfields Limited"
                    ],
                    "answer": "Singareni Collieries Company Limited"
            },
            {
                    "question": "Which one of the following is a tributary of Barak River in Manipur ?",
                    "options": [
                            "Dhaleswari",
                            "Subansiri",
                            "Dhansiri",
                            "Manas"
                    ],
                    "answer": "Dhaleswari"
            },
            {
                    "question": "Which types of vegetation will you find on the way as you travel from Bikaner to Konark by road by shortest distance ?",
                    "options": [
                            "Tropical thorny, Desert, Moist deciduous, Mangrove",
                            "Desert, Tropical thorny, Moist deciduous, Mangrove",
                            "Moist deciduous, Tropical thorny, Mangrove, Desert",
                            "Desert, Tropical thorny, Mangrove, Moist deciduous"
                    ],
                    "answer": "Desert, Tropical thorny, Moist deciduous, Mangrove"
            },
            {
                    "question": "Consider the following statements about Karewas :<br/><br/>1. These are the lacustrine deposits of Pleistocene period.<br/>2. These are found along the lower slopes of Pir Panjal.<br/>3. Karewas are well known for the cultivation of saffron, almond and walnut.<br/><br/>How many of the above statements is/are correct ?",
                    "options": [
                            "1",
                            "2",
                            "3",
                            "None"
                    ],
                    "answer": "3"
            },
            {
                    "question": "Consider the following statements about an Indian State :<br/><br/>1. It is well known globally for its variety of rocks and minerals.<br/>2. It has the largest deposits of Chrysotile Asbestos in the country.<br/>3. The Neelam Sanjiva Reddy Sagar Hydel Project is located in this State.<br/><br/>Identify the State from the following :",
                    "options": [
                            "Jharkhand",
                            "Rajasthan",
                            "Andhra Pradesh",
                            "Chhattisgarh"
                    ],
                    "answer": "Andhra Pradesh"
            },
            {
                    "question": "During 2020 - 21, when India was passing through the adverse effects of COVID-19, which one of the following sectors witnessed positive growth ?",
                    "options": [
                            "Mining and quarrying",
                            "Electricity, gas, water supply and other utility services",
                            "Financial, real estate and professional services",
                            "Public administration, defence and other services"
                    ],
                    "answer": "Electricity, gas, water supply and other utility services"
            },
            {
                    "question": "Which one of the following statements about a borrower from a Microfinance Company is <i>not</i> correct ?",
                    "options": [
                            "The borrower should not have annual income beyond a limit.",
                            "The borrower should not seek loan amount beyond a limit.",
                            "The borrower should not refuse to offer a collateral.",
                            "The borrower should not refuse to pay any rate of interest offered."
                    ],
                    "answer": "The borrower should not refuse to offer a collateral."
            },
            {
                    "question": "Which one of the following statements about Non-Banking Financial Companies (NBFCs) is <i>not</i> correct ?",
                    "options": [
                            "NBFCs cannot accept demand deposits.",
                            "NBFCs cannot give loans.",
                            "NBFCs cannot issue cheques drawn on themselves.",
                            "NBFCs cannot offer deposit insurance facility of Deposit Insurance and Credit Guarantee Corporation."
                    ],
                    "answer": "NBFCs cannot give loans."
            },
            {
                    "question": "The Department for Promotion of Industry and Internal Trade (DPIIT) has revised the base year index of Eight Core Industries having a combined weight of about 40.27 percent in the Index of Industrial Production. Which one of the following is <i>not</i> one of the Eight Core Industries ?",
                    "options": [
                            "Coal",
                            "Refinery products",
                            "Rubber products",
                            "Cement"
                    ],
                    "answer": "Rubber products"
            },
            {
                    "question": "Consider the following statements about the Micro, Small and Medium Enterprises (MSMEs) :<br/><br/>1. The MSMEs comprise a dynamic sector of the Indian economy providing large employment opportunities.<br/>2. MSMEs require low capital cost and help industrialization of backward regions.<br/>3. MSMEs contribute enormously to socio-economic development.<br/><br/>How many of the above statements is/are correct ?",
                    "options": [
                            "None",
                            "1",
                            "2",
                            "3"
                    ],
                    "answer": "3"
            },
            {
                    "question": "Stinging hair of nettle leaves inject fluid in the human body causing burning pain. The fluid is",
                    "options": [
                            "Methanoic acid",
                            "Tartaric acid",
                            "Hydrochloric acid",
                            "Sulphuric acid"
                    ],
                    "answer": "Methanoic acid"
            },
            {
                    "question": "Milk of Magnesia is used when people suffer from indigestion of food. It is a",
                    "options": [
                            "Strong base",
                            "Mild base",
                            "Strong acid",
                            "Mild acid"
                    ],
                    "answer": "Mild base"
            },
            {
                    "question": "Which one of the following pairs of metals are very good conductors of heat ?",
                    "options": [
                            "Silver and Copper",
                            "Silver and Lead",
                            "Copper and Mercury",
                            "Lead and Mercury"
                    ],
                    "answer": "Silver and Copper"
            },
            {
                    "question": "School bells are made of metals because metals are",
                    "options": [
                            "Malleable",
                            "Sonorous",
                            "Ductile",
                            "Lustrous"
                    ],
                    "answer": "Sonorous"
            },
            {
                    "question": "Consider the following statements about Tincture of Iodine :<br/><br/>1. It is an antiseptic solution.<br/>2. Iodine is kept in alcohol-water mixture.<br/>3. Concentration of iodine is very low.<br/><br/>How many of the above statements is/are correct ?",
                    "options": [
                            "1",
                            "2",
                            "3",
                            "None"
                    ],
                    "answer": "3"
            },
            {
                    "question": "Cl<sup>-</sup> is <i>not</i> isoelectronic with",
                    "options": [
                            "K<sup>+</sup>",
                            "Mg<sup>2+</sup>",
                            "S<sup>2-</sup>",
                            "P<sup>3-</sup>"
                    ],
                    "answer": "Mg<sup>2+</sup>"
            },
            {
                    "question": "In plant cells",
                    "options": [
                            "Nucleus does not need a membrane but chloroplasts are surrounded by their own membrane.",
                            "Nucleus and chloroplasts are surrounded separately by their own membrane.",
                            "Nucleus is surrounded by membrane but chloroplasts do not need membrane.",
                            "Both nucleus and chloroplasts are not surrounded by any membrane."
                    ],
                    "answer": "Nucleus and chloroplasts are surrounded separately by their own membrane."
            },
            {
                    "question": "Which one of the following statements about starch and glycogen is correct ?",
                    "options": [
                            "Both starch and glycogen are found in plant cells.",
                            "Both starch and glycogen are found in animal cells.",
                            "Starch is present in plant cells and glycogen is present in animal cells.",
                            "Both starch and glycogen are present in plant cells as well as animal cells."
                    ],
                    "answer": "Starch is present in plant cells and glycogen is present in animal cells."
            },
            {
                    "question": "Which one of the following statements about the process of photosynthesis is correct ?",
                    "options": [
                            "Light energy is directly converted to kinetic energy which oxidizes carbon dioxide.",
                            "Light energy is directly converted to chemical energy which causes reduction of water.",
                            "Chlorophyll absorbs the chemical energy of light which causes oxidation of carbon dioxide.",
                            "Chlorophyll absorbs light energy which causes splitting of water molecules and reduction of carbon dioxide."
                    ],
                    "answer": "Chlorophyll absorbs light energy which causes splitting of water molecules and reduction of carbon dioxide."
            },
            {
                    "question": "Kwashiorkor, a form of malnutrition, is caused by the deficiency of",
                    "options": [
                            "Minerals",
                            "Vitamins",
                            "Fats",
                            "Proteins"
                    ],
                    "answer": "Proteins"
            },
            {
                    "question": "Which one of the following pairs of enzymes do <i>not</i> work at acidic pH ?",
                    "options": [
                            "Trypsin and Pepsin",
                            "Chymotrypsin and Pepsin",
                            "Trypsin and Amylase",
                            "Pepsin and Amylase"
                    ],
                    "answer": "Trypsin and Amylase"
            },
            {
                    "question": "Urea is produced by metabolism of",
                    "options": [
                            "Proteins",
                            "Carbohydrates",
                            "Lipids",
                            "Both Proteins and Carbohydrates"
                    ],
                    "answer": "Proteins"
            },
            {
                    "question": "Deficiency of iron causes",
                    "options": [
                            "Anaemia",
                            "Scurvy",
                            "Rickets",
                            "Cholera"
                    ],
                    "answer": "Anaemia"
            },
            {
                    "question": "If an object of mass 10 kg is moving with a uniform speed of 10 m/s, then the linear momentum and the kinetic energy of the object, respectively, are",
                    "options": [
                            "100 N.s and 500 J",
                            "100 N.s and 1000 J",
                            "200 N.s and 500 J",
                            "200 N.s and 1000 J"
                    ],
                    "answer": "100 N.s and 500 J"
            },
            {
                    "question": "An electrical circuit having combinations of resistances and capacitance is given below. The current, flowing through the circuit will be<br/><br/><img src=\"/images/2022-II-gk-q25.jpg\" alt=\"Circuit diagram\" />",
                    "options": [
                            "1 A",
                            "2 A",
                            "1.5 A",
                            "0.5 A"
                    ],
                    "answer": "0.5 A"
            },
            {
                    "question": "The pitch of a sound wave depends upon which one of its following characteristics ?",
                    "options": [
                            "Speed",
                            "Loudness",
                            "Amplitude",
                            "Frequency"
                    ],
                    "answer": "Frequency"
            },
            {
                    "question": "The device used for measuring electric current in a circuit is called",
                    "options": [
                            "Ammeter",
                            "Motor",
                            "Voltmeter",
                            "Generator"
                    ],
                    "answer": "Ammeter"
            },
            {
                    "question": "A metal wire of length l and diameter d has a resistance R. What would be the resistance of another wire of the same metal and of same length but having double the diameter ?",
                    "options": [
                            "R",
                            "R/4",
                            "R/2",
                            "2R"
                    ],
                    "answer": "R/4"
            },
            {
                    "question": "In India, which one of the following is responsible for the implementation of the Government of India's policy in all matters concerning telecommunications ?",
                    "options": [
                            "Digital Communications Commission",
                            "Telecom Regulatory Authority of India",
                            "Telecom Advisory Committee",
                            "Telecommunications Consultants India Limited"
                    ],
                    "answer": "Digital Communications Commission"
            },
            {
                    "question": "Consider the following statements about James Webb Space Telescope (JWST) :<br/><br/>1. It is the largest observatory ever launched into space.<br/>2. It has been developed by NASA in partnership with the European Space Agency and the Canadian Space Agency.<br/><br/>Which of the statements given above is/are correct ?",
                    "options": [
                            "1 only",
                            "2 only",
                            "Both 1 and 2",
                            "Neither 1 nor 2"
                    ],
                    "answer": "Both 1 and 2"
            },
            {
                    "question": "India has achieved the 10 percent Ethanol blending much ahead of the targeted date. Which one among the following greatly benefits from this ?",
                    "options": [
                            "Cassava plantations",
                            "Maize farming",
                            "Sugar industry",
                            "Wine industry"
                    ],
                    "answer": "Sugar industry"
            },
            {
                    "question": "Consider the following statements regarding e-RUPI prepaid digital vouchers :<br/><br/>1. The maximum amount of e-RUPI is rupees one lakh.<br/>2. Beneficiaries can receive e-RUPI without having a bank account.<br/>3. To receive e-RUPI on mobile phones, beneficiaries need a smart phone with Internet connection.<br/><br/>Which of the statements given above is/are correct ?",
                    "options": [
                            "1 and 2",
                            "3 only",
                            "1 and 3",
                            "2 only"
                    ],
                    "answer": "1 and 2"
            },
            {
                    "question": "Recently, India's first green hydrogen-based advanced fuel cell electric vehicle (FCEV) was launched. It has no tailpipe emissions other than",
                    "options": [
                            "Hydrogen peroxide",
                            "Nitrogen",
                            "Oxygen",
                            "Water"
                    ],
                    "answer": "Water"
            },
            {
                    "question": "Which one of the following languages was added to the Eighth Schedule by a Constitutional Amendment in 1967 ?",
                    "options": [
                            "Khasi",
                            "Kashmiri",
                            "Sindhi",
                            "Urdu"
                    ],
                    "answer": "Sindhi"
            },
            {
                    "question": "What were Manigramam and Nanadesi in early medieval India ?",
                    "options": [
                            "Cluster of non-revenue paying villages",
                            "Village-level community groups",
                            "Guilds of Indian merchants",
                            "Literary societies in the capital towns"
                    ],
                    "answer": "Guilds of Indian merchants"
            }
    ],
    "2025": [
        {
            "question": "Consider the following international events :<br/><br/>1. Signing of the Simla Agreement<br/>2. Agra Summit between India and Pakistan<br/>3. Signing of the SAARC Charter at the First SAARC Summit<br/>4. India's first nuclear test<br/><br/>Which one of the following is the correct chronological order of the above events ?",
            "options": [
                "1, 3, 4, 2",
                "4, 1, 3, 2",
                "1, 4, 3, 2",
                "4, 1, 2, 3"
            ],
            "answer": "1, 4, 3, 2"
        },
        {
            "question": "Which one of the following features is correct about the 'First Past the Post System' of election ?",
            "options": [
                "A candidate who wins may not get the majority of votes",
                "More than one representative may be elected from one constituency",
                "Voters vote for the party, not the candidate",
                "Every party gets seats in the legislature in proportion to percentage of votes that it gets"
            ],
            "answer": "A candidate who wins may not get the majority of votes"
        },
        {
            "question": "Match List-I with List-II and select the answer using the code given below the Lists :<br/><br/><b>List-I (Special provision in the Constitution of India)</b><br/>A. Article 371<br/>B. Article 371-A<br/>C. Article 371-B<br/>D. Article 371-I<br/><br/><b>List-II (State)</b><br/>1. Nagaland<br/>2. Gujarat<br/>3. Assam<br/>4. Goa",
            "options": [
                "A-4, B-1, C-3, D-2",
                "A-4, B-3, C-1, D-2",
                "A-2, B-1, C-3, D-4",
                "A-2, B-3, C-1, D-4"
            ],
            "answer": "A-2, B-1, C-3, D-4"
        },
        {
            "question": "Which of the following statements as per the Constitution of India is/are correct ?<br/><br/>1. Provision for the reservation of seats for women in the Lok Sabha and the Rajya Sabha has been made vide 106<sup>th</sup> Amendment of the Constitution.<br/>2. There are provisions for the reservation of seats for women in the Legislative Assemblies and Legislative Councils of the States.<br/>3. There are provisions for the reservation of seats for women in Panchayats.",
            "options": [
                "1 and 2",
                "2 and 3",
                "1 only",
                "3 only"
            ],
            "answer": "3 only"
        },
        {
            "question": "Which one among the following pairs of Subjects and Lists under the Seventh Schedule of the Constitution of India is <i>not</i> correctly matched ?",
            "options": [
                "Forest : Concurrent List",
                "Taxes on land and building : State List",
                "Insurance : Union List",
                "Census : Concurrent List"
            ],
            "answer": "Census : Concurrent List"
        },
        {
            "question": "Which of the following statements with reference to the Preamble to the Constitution of India are correct ?<br/><br/>1. The word 'secular' comes before the word 'socialist'.<br/>2. The word 'justice' comes before the word 'equality'.<br/>3. The word 'fraternity' comes after the word 'liberty'.",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Which one of the following statements about 'Motions' in the Parliament of India is correct ?",
            "options": [
                "A Motion of No-Confidence can be admissible against an individual minister in the Council of Ministers.",
                "A No-Confidence Motion must set out grounds on which it is based.",
                "Rajya Sabha is not empowered to entertain a motion of No-Confidence.",
                "A Censure Motion need not be based on specific grounds or charges."
            ],
            "answer": "Rajya Sabha is not empowered to entertain a motion of No-Confidence."
        },
        {
            "question": "Part IV-A of the Constitution of India deals with which one of the following areas ?",
            "options": [
                "Appointment of Members to Public Service Commissions",
                "Fundamental Duties",
                "Functions of Public Service Commissions",
                "Provisions for the functioning of the State Governments"
            ],
            "answer": "Fundamental Duties"
        },
        {
            "question": "The 'Durand Line' is a border demarcation that separates which of the following countries ?",
            "options": [
                "Afghanistan and Iran",
                "Afghanistan and Pakistan",
                "India and Pakistan",
                "Afghanistan and China"
            ],
            "answer": "Afghanistan and Pakistan"
        },
        {
            "question": "Consider the following social movements :<br/><br/>1. Chipko Movement<br/>2. Bardoli Satyagraha<br/>3. Satyashodhak Samaj<br/><br/>Which one of the following is the correct chronological order (starting with the earliest) of the launch of the above social movements ?",
            "options": [
                "2, 1, 3",
                "3, 1, 2",
                "3, 2, 1",
                "1, 2, 3"
            ],
            "answer": "3, 2, 1"
        },
        {
            "question": "Which one of the following statements about the Tashkent Agreement is correct ?",
            "options": [
                "It was an agreement between India and the Soviet Union.",
                "It was an agreement between India and Pakistan.",
                "It was an agreement that led to the formation of Bangladesh.",
                "It was an agreement between India and Mongolia."
            ],
            "answer": "It was an agreement between India and Pakistan."
        },
        {
            "question": "Which among the following is <i>not</i> a language listed in the Eighth Schedule of the Constitution of India ?",
            "options": [
                "Manipuri",
                "Gondi",
                "Nepali",
                "Dogri"
            ],
            "answer": "Gondi"
        },
        {
            "question": "Which of the following can be considered a part of the ancient Indian <i>Smriti</i> Literature ?<br/><br/>1. Puranas<br/>2. Ramayana<br/>3. Kalpa-Sutra<br/>4. Vedas",
            "options": [
                "1, 2 and 3 only",
                "3 and 4 only",
                "1 and 2 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1, 2 and 3 only"
        },
        {
            "question": "Who among the following was India's first Woman Chief Minister ?",
            "options": [
                "Sarojini Naidu",
                "Sucheta Kripalani",
                "Vijaya Lakshmi Pandit",
                "Hansa Mehta"
            ],
            "answer": "Sucheta Kripalani"
        },
        {
            "question": "Which of the following statements is/are correct ?<br/><br/>1. C. Rajagopalachari was the first recipient of the Bharat Ratna.<br/>2. Pandit Deen Dayal Upadhyaya initiated the concept of 'Integral Humanism'.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following pairs of Institute and their location is/are correctly matched ?<br/><br/>1. Indian Institute of Advanced Study : Shimla<br/>2. Indian Institue of Public Administration : New Delhi<br/>3. Sushma Swaraj Institute of Foreign Service : Nainital",
            "options": [
                "1 and 2",
                "2 and 3",
                "1 only",
                "2 only"
            ],
            "answer": "1 and 2"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. Erok Sim is a festival mainly celebrated by the Santhal community.<br/>2. Sangken is a Buddhist festival celebrated in Arunachal Pradesh.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "'Maitree' is a Joint Military Exercise between India and :",
            "options": [
                "Bangladesh",
                "Thailand",
                "Malaysia",
                "Sri Lanka"
            ],
            "answer": "Thailand"
        },
        {
            "question": "Which of the following criteria are specified for granting Special Category Status to States in India ?<br/><br/>1. Hilly and difficult terrain<br/>2. Economic and infrastructural backwardness<br/>3. Strategic coastal zone<br/>4. Sizeable share of tribal population",
            "options": [
                "1 and 2 only",
                "3 and 4 only",
                "1, 2 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1, 2 and 4 only"
        },
        {
            "question": "Who among the following is the founder of the Congress Socialist Party ?",
            "options": [
                "Acharya Narendra Dev",
                "Jawaharlal Nehru",
                "Motilal Nehru",
                "Asoka Mehta"
            ],
            "answer": "Acharya Narendra Dev"
        },
        {
            "question": "The rule to determine the direction of a current induced in a coil due to its rotation in a magnetic field is :",
            "options": [
                "Right-Hand Thumb Rule.",
                "Fleming's Left-Hand Rule.",
                "Fleming's Right-Hand Rule.",
                "Hund's Rule."
            ],
            "answer": "Fleming's Right-Hand Rule."
        },
        {
            "question": "A car travels a total distance L. It travels half the distance with speed v<sub>1</sub> and the other half with speed v<sub>2</sub>. The average speed of the car is :",
            "options": [
                "(v<sub>1</sub> + v<sub>2</sub>) / 2",
                "2v<sub>1</sub>v<sub>2</sub> / (v<sub>1</sub> + v<sub>2</sub>)",
                "(v<sub>1</sub> + v<sub>2</sub>)L / 2v<sub>1</sub>v<sub>2</sub>",
                "0"
            ],
            "answer": "2v<sub>1</sub>v<sub>2</sub> / (v<sub>1</sub> + v<sub>2</sub>)"
        },
        {
            "question": "The linear momentum of a particle is conserved if :",
            "options": [
                "the net force on it is maximum.",
                "the net force on it is zero.",
                "the net torque on it is zero.",
                "the net work done on it is maximum."
            ],
            "answer": "the net force on it is zero."
        },
        {
            "question": "When a stone tied to a string is whirled in a circle, the work done on it by the string :",
            "options": [
                "is positive.",
                "is negative.",
                "is zero.",
                "depends on the mass of the stone."
            ],
            "answer": "is zero."
        },
        {
            "question": "Assume 'A' does 500 J of work in 'x' minutes and 'B' does 1000 J of work in 20 minutes. If the power delivered by 'A' is P<sub>1</sub> and 'B' is P<sub>2</sub> and P<sub>1</sub> = 2P<sub>2</sub>, then 'x', in minutes is :",
            "options": [
                "10",
                "5",
                "20",
                "25"
            ],
            "answer": "5"
        },
        {
            "question": "A sound wave travelling at a speed of 330 m/s produces 20 crests and 20 troughs in 0·1 second. The wavelength of the sound wave is :",
            "options": [
                "1·1 m",
                "3·3 m",
                "1·65 m",
                "2·2 m"
            ],
            "answer": "1·65 m"
        },
        {
            "question": "An X-ray can be deflected :",
            "options": [
                "by a magnetic field.",
                "by an electric field.",
                "by both electric and magnetic field.",
                "neither by electric field nor by magnetic field."
            ],
            "answer": "neither by electric field nor by magnetic field."
        },
        {
            "question": "In a simple astronomical telescope, the objective and the eyepiece used respectively, are :",
            "options": [
                "a convergent lens and a divergent lens.",
                "a divergent lens and a divergent lens.",
                "a divergent lens and a convergent lens.",
                "a convergent lens and a convergent lens."
            ],
            "answer": "a convergent lens and a convergent lens."
        },
        {
            "question": "Twinkling of a star is due to :",
            "options": [
                "Interference of light",
                "Refraction of light",
                "Polarization of light",
                "Diffraction of light"
            ],
            "answer": "Refraction of light"
        },
        {
            "question": "Van de Graaff generator generates :",
            "options": [
                "electrostatic charge",
                "magnetic field",
                "high voltage low alternating current",
                "high voltage direct current"
            ],
            "answer": "high voltage direct current"
        },
        {
            "question": "Which one of the following metals is widely extracted by the electrolysis of its molten compound ?",
            "options": [
                "Cu",
                "Au",
                "Sn",
                "Na"
            ],
            "answer": "Na"
        },
        {
            "question": "Which one of the following is <i>not</i> a property of 'graphene' ?",
            "options": [
                "It is the thinnest material known so far.",
                "It is almost completely transparent.",
                "It is highly conducting.",
                "It is a wide band-gap semiconductor."
            ],
            "answer": "It is a wide band-gap semiconductor."
        },
        {
            "question": "Why do plastics <i>not</i> degrade easily ?",
            "options": [
                "They have strong ionic bonds.",
                "They have strong covalent bonds.",
                "They have strong metallic bonds.",
                "They have very high melting points (> 500°C)."
            ],
            "answer": "They have strong covalent bonds."
        },
        {
            "question": "Which one of the following is the correct chemical formula of carboxylic acid ?",
            "options": [
                "C<sub>3</sub>H<sub>7</sub>OH",
                "C<sub>3</sub>H<sub>8</sub>",
                "C<sub>2</sub>H<sub>5</sub>COOH",
                "CH<sub>3</sub>COCH<sub>3</sub>"
            ],
            "answer": "C<sub>2</sub>H<sub>5</sub>COOH"
        },
        {
            "question": "Which one of the following statements is <i>not</i> correct for benzene ?",
            "options": [
                "Each carbon atom forms sigma bonds with two other carbon atoms with a bond angle of 120°.",
                "Delocalized electrons create a symmetrical 'cloud' of electrons above and below the plane.",
                "The length of C–C bonds is intermediate between single and double bonds.",
                "It has six isomers."
            ],
            "answer": "It has six isomers."
        },
        {
            "question": "Which one of the following is <i>not</i> a nitrogen fertilizer ?",
            "options": [
                "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
                "NH<sub>4</sub>NO<sub>3</sub>",
                "N<sub>2</sub>",
                "(NH<sub>2</sub>)<sub>2</sub>CO"
            ],
            "answer": "N<sub>2</sub>"
        },
        {
            "question": "Which one of the following general electronic configurations correctly represent a transition metal element ?",
            "options": [
                "(n – 2) d<sup>1–10</sup> ns<sup>2</sup>",
                "(n – 2) f<sup>1–14</sup> (n – 1) d<sup>0–1</sup> ns<sup>2</sup>",
                "ns<sup>2</sup> np<sup>6</sup> nd<sup>1–10</sup>",
                "(n – 1) d<sup>1–10</sup> ns<sup>0–2</sup>"
            ],
            "answer": "(n – 1) d<sup>1–10</sup> ns<sup>0–2</sup>"
        },
        {
            "question": "Variable oxidation numbers are possible for :",
            "options": [
                "Sodium",
                "Calcium",
                "Iron",
                "Lithium"
            ],
            "answer": "Iron"
        },
        {
            "question": "Which one of the following gas smells like a rotten egg ?",
            "options": [
                "Ammonia",
                "Hydrogen sulphide",
                "Acetylene",
                "Sulphur dioxide"
            ],
            "answer": "Hydrogen sulphide"
        },
        {
            "question": "The chemical reaction<br/><br/>K<sub>2</sub>SO<sub>4</sub> (aq.) + BaCl<sub>2</sub> (aq.) &rarr; 2KCl (aq.) + BaSO<sub>4</sub>&darr; (solid)<br/><br/>is an example of :",
            "options": [
                "Addition reaction",
                "Displacement reaction",
                "Decomposition reaction",
                "Double displacement reaction"
            ],
            "answer": "Double displacement reaction"
        },
        {
            "question": "Which one among the following is the correct scheme followed for classification of animals ?",
            "options": [
                "Class &rarr; Phylum &rarr; Order &rarr; Genus &rarr; Family &rarr; Species",
                "Phylum &rarr; Class &rarr; Family &rarr; Genus &rarr; Order &rarr; Species",
                "Order &rarr; Class &rarr; Phylum &rarr; Family &rarr; Species &rarr; Genus",
                "Phylum &rarr; Class &rarr; Order &rarr; Family &rarr; Genus &rarr; Species"
            ],
            "answer": "Phylum &rarr; Class &rarr; Order &rarr; Family &rarr; Genus &rarr; Species"
        },
        {
            "question": "Which one of the following is an example of airborne disease ?",
            "options": [
                "Tuberculosis",
                "Malaria",
                "Dengue",
                "Cholera"
            ],
            "answer": "Tuberculosis"
        },
        {
            "question": "What are the four human blood types in ABO blood group typing ?",
            "options": [
                "AO, BO, A and B",
                "A, B, AB and O",
                "A, AB, BO and O",
                "AB, AO, B and O"
            ],
            "answer": "A, B, AB and O"
        },
        {
            "question": "Which one of the following is <i>not</i> a part of the male reproductive system in human beings ?",
            "options": [
                "Prostate gland",
                "Testis",
                "Cervix",
                "Scrotum"
            ],
            "answer": "Cervix"
        },
        {
            "question": "Which of the following are the different parts of a human brain ?",
            "options": [
                "Forefront brain, Standard brain and Hind brain",
                "Fore brain, Median brain and Rear brain",
                "Fore brain, Mid brain and Hind brain",
                "Precursor brain, Mean brain and Hind brain"
            ],
            "answer": "Fore brain, Mid brain and Hind brain"
        },
        {
            "question": "Tooth enamel of humans is made up of :",
            "options": [
                "Calcium phosphate",
                "Sodium hydrogen carbonate",
                "Sodium hydroxide",
                "Lactic acid"
            ],
            "answer": "Calcium phosphate"
        },
        {
            "question": "The inner lining of the human small intestine has numerous finger-like projections called :",
            "options": [
                "Sphincter",
                "Villi",
                "Enzymes",
                "Plaques"
            ],
            "answer": "Villi"
        },
        {
            "question": "Which of the following represent disaccharides ?",
            "options": [
                "Starch and glycogen",
                "Glucose and galactose",
                "Maltose and lactose",
                "Ribose and xylose"
            ],
            "answer": "Maltose and lactose"
        },
        {
            "question": "Which one of the following organelles can be seen in a prokaryotic cell ?",
            "options": [
                "Mitochondria",
                "Definitive nucleus",
                "Ribosomes",
                "Golgi bodies"
            ],
            "answer": "Ribosomes"
        },
        {
            "question": "A solution with a pH value less than 7 is a/an :",
            "options": [
                "Neutral solution",
                "Basic solution",
                "Acidic solution",
                "Hypotonic solution"
            ],
            "answer": "Acidic solution"
        },
        {
            "question": "Consider the following statements about the Bengal countryside at the time of the Permanent Settlement :<br/><br/>1. The zamindars' troops were disbanded.<br/>2. Within the villages, the power of <i>jotedars</i> was more effective than that of zamindars.<br/>3. The East India Company made a rule that the property of women would not be taken over.<br/>4. <i>Adhiyars</i> were sharecroppers on the land owned by <i>bargadars</i>.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1, 2 and 4",
                "1, 2 and 3",
                "2, 3 and 4",
                "1 and 3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Match List-I with List-II and select the answer using the code given below the Lists :<br/><br/><b>List-I (Journal/Newspaper/Pamphlet)</b><br/>A. Kudi Arasu<br/>B. Kisan Bulletin<br/>C. Bombay Chronicle<br/>D. Bhawani Mandir<br/><br/><b>List-II (Founder/Editor/Author)</b><br/>1. Aurobindo Ghosh<br/>2. Pherozeshah Mehta<br/>3. Indulal Yagnik<br/>4. E.V. Ramaswami Naicker",
            "options": [
                "A-4, B-3, C-2, D-1",
                "A-4, B-2, C-3, D-1",
                "A-1, B-3, C-2, D-4",
                "A-1, B-2, C-3, D-4"
            ],
            "answer": "A-4, B-3, C-2, D-1"
        },
        {
            "question": "Which of the following statements about the Ghadar Movement is/are correct ?<br/><br/>1. The Ghadar Movement began in 1913 in San Francisco.<br/>2. The movement was founded by Sohan Singh Bhakna.<br/>3. The Ghadar Movement took its name from the weekly Ghadar brought out in several Indian languages.",
            "options": [
                "1 only",
                "2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Chronologically arrange the formation of the following political associations, beginning from the earliest :<br/><br/>1. Poona Sarvajanik Sabha<br/>2. Indian Association<br/>3. Madras Mahajan Sabha<br/>4. Bombay Presidency Association<br/><br/>Select the answer using the code given below :",
            "options": [
                "1, 2, 3, 4",
                "4, 3, 2, 1",
                "1, 2, 4, 3",
                "3, 4, 1, 2"
            ],
            "answer": "1, 2, 3, 4"
        },
        {
            "question": "Which one of the following periods has provided the evidence of a ploughed field at Kalibangan in Rajasthan ?",
            "options": [
                "Early Harappan",
                "Mature Harappan",
                "Late Harappan",
                "Chalcolithic"
            ],
            "answer": "Early Harappan"
        },
        {
            "question": "Consider the following events :<br/><br/>1. Muslim League Resolution for Pakistan<br/>2. Gandhi-Irwin Pact<br/>3. Dandi March<br/>4. Second Round Table Conference<br/><br/>Which one of the following is the correct chronological order of the given events (earliest to latest) ?",
            "options": [
                "2, 3, 1, 4",
                "3, 2, 4, 1",
                "3, 4, 2, 1",
                "2, 3, 4, 1"
            ],
            "answer": "3, 2, 4, 1"
        },
        {
            "question": "Consider the following pairs :<br/><br/><b>(Historical Place) : (Well-known for)</b><br/>I. Girnar : Sudarshana Lake<br/>II. Cholistan : Terracotta model of Plough<br/>III. Mant (near Mathura) : Headless standing figure of Kanishka<br/>IV. Sannati : Asokan Pillar Edict in Odisha<br/><br/>How many pairs given above is/are correctly matched ?",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": "3"
        },
        {
            "question": "With reference to the \"Amara-Nayaka system\", which one of the following statements is <i>not</i> correct ?",
            "options": [
                "It was a major political innovation of the Vijayanagara Empire.",
                "They were military commanders, who were given territories to govern and collect taxes and other dues from peasants, craftspersons and traders in the area.",
                "They retained part of the revenue for personal use and to maintain a stipulated contingent of horses and elephants.",
                "They were not allowed to use their share of revenue for the maintenance of temples."
            ],
            "answer": "They were not allowed to use their share of revenue for the maintenance of temples."
        },
        {
            "question": "The popular poem \"Khoob ladi mardani woh to Jhansi wali rani thi\" (Like a man she fought, she was the Rani of Jhansi) was written by :",
            "options": [
                "Mahadevi Varma",
                "Subhadra Kumari Chauhan",
                "Amrita Pritam",
                "Balamani Amma"
            ],
            "answer": "Subhadra Kumari Chauhan"
        },
        {
            "question": "Consider the following statements about Ellora :<br/><br/>1. This art-historical site is associated exclusively with Buddhism.<br/>2. The Kailasa temple at Ellora has been built of dressed stone and kiln fired bricks.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Neither 1 nor 2"
        },
        {
            "question": "In which one of the following states are the Guntupalle Buddhist Caves located ?",
            "options": [
                "Andhra Pradesh",
                "Karnataka",
                "Tamil Nadu",
                "Kerala"
            ],
            "answer": "Andhra Pradesh"
        },
        {
            "question": "Consider the following statements about Ajanta Cave paintings :<br/><br/>1. The paintings depict <i>yakshas</i>, <i>gandharvas</i> and <i>apsaras</i>.<br/>2. The artists have used the technique of providing \"multiple perspectives\".<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "\"Neel Darpan\", a play that depicted the atrocities on the indigo planters, was translated into English by :",
            "options": [
                "Dinabandhu Mitra",
                "Michael Madhusudan Dutta",
                "James Long",
                "James C. Scott"
            ],
            "answer": "Michael Madhusudan Dutta"
        },
        {
            "question": "With reference to the Revolt of 1857, consider the following statements :<br/><br/>1. Shah Mal mobilised the people of Baraut region of Uttar Pradesh and captured the bungalow of an Englishman and converted it into a \"hall of justice\".<br/>2. Gonoo was a Kol leader of the Singhbhum region of Chotanagpur.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following books portrays three images of the Mother Goddess : \"Mother as she was\", \"Mother as she is\" and \"Mother as she will be\" ?",
            "options": [
                "Durgeshnandini",
                "Kapalkundala",
                "Anandamath",
                "Devi Chaudhurani"
            ],
            "answer": "Anandamath"
        },
        {
            "question": "With reference to the women achievers in modern India, consider the following statements :<br/><br/>1. Pandita Ramabai published a book \"A Comparison Between Women and Men\" where she protested against the colonial view that men enjoyed all the rights, opportunities and benefits of change.<br/>2. Tarabai Shinde worked in the field of medicine to reduce child mortality in rural India.<br/>3. Sarojini Naidu led a delegation to London to demand for female franchise.<br/><br/>How many of the statements given above is/are correct ?",
            "options": [
                "1",
                "2",
                "3",
                "None"
            ],
            "answer": "1"
        },
        {
            "question": "The Sanikatta Salt Works, known for Salt Satyagraha, is located in :",
            "options": [
                "Gujarat",
                "Tamil Nadu",
                "Kerala",
                "Karnataka"
            ],
            "answer": "Karnataka"
        },
        {
            "question": "The Kalaram temple, known for temple entry movements in the early twentieth century, is located in which state of India ?",
            "options": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu",
                "Gujarat"
            ],
            "answer": "Maharashtra"
        },
        {
            "question": "Matangini Hazra and Lakshman Naik sacrificed their lives in :",
            "options": [
                "Bardoli Satyagraha",
                "Non-Cooperation Movement",
                "Civil Disobedience Movement",
                "Quit India Movement"
            ],
            "answer": "Quit India Movement"
        },
        {
            "question": "With reference to the history of India, the word \"<i>kopeki</i>\" is associated with :",
            "options": [
                "Clothes",
                "Coins",
                "Land measurement",
                "A type of sport in South India"
            ],
            "answer": "Coins"
        },
        {
            "question": "Which one among the following pairs of type of firm and feature is <i>not</i> correctly matched ?",
            "options": [
                "Oligopoly firm : Interdependence in decision-making",
                "Monopolistic firm : Firm is a price setter",
                "Monopoly firm : Produces an efficient level of output",
                "Perfectly competitive firm : Produces socially optimum output"
            ],
            "answer": "Monopoly firm : Produces an efficient level of output"
        },
        {
            "question": "Union Budget 2025 increased the Sectoral cap of FDI to 100 per cent from 74 per cent for :",
            "options": [
                "Telecom Sector",
                "Power Sector",
                "Defence Sector",
                "Insurance Sector"
            ],
            "answer": "Insurance Sector"
        },
        {
            "question": "The practice of reducing the size of a product while maintaining its sticker price is called :",
            "options": [
                "Shrinkflation",
                "Reflation",
                "Disinflation",
                "Deflation"
            ],
            "answer": "Shrinkflation"
        },
        {
            "question": "Consider the following statements about innovation and research and development in India :<br/><br/>1. India's rank in Global Innovation Index reported by World Intellectual Property Organization (WIPO) has improved significantly between 2015 and 2024.<br/>2. Funding of research and development is sourced primarily from private sector entities and is sectorally concentrated in pharmaceuticals and information technology.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Consider the following statements about the Indian Institute of Entrepreneurship (IIE) :<br/><br/>1. The IIE was established in 1999 in Guwahati.<br/>2. The main aim of the institute is to provide training, research and consulting activities for small and micro enterprises.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Consider the following statements about Union Government's Expenditure on revenue account and effective capital expenditure :<br/><br/>1. Effective capital expenditure as percentage of GDP has increased from 2020-21 to 2023-24.<br/>2. Expenditure on revenue account as percentage of GDP has increased from 2020-21 to 2023-24.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which one among the following statements about the Districts as Export Hubs (DEH) in India is <i>not</i> correct ?",
            "options": [
                "DEH was launched in August 2019.",
                "The aim of DEH is to boost exports of only selected districts of the country.",
                "India's Foreign Trade Policy 2023 reiterated the role of DEH.",
                "DEH aims to promote exports by providing financial inclusion and facilitating logistical and infrastructural support."
            ],
            "answer": "The aim of DEH is to boost exports of only selected districts of the country."
        },
        {
            "question": "Which of the following statements about Tim Tim Tare (TTT) is/are correct ?<br/><br/>1. TTT is a pioneering initiative that aims at imparting essential life skills to adolescent students across India.<br/>2. TTT is a pioneering initiative that aims at imparting vocational and technical skills to students across India.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Consider the following statements regarding Annual Periodic Labour Force Survey (PLFS) report 2023-24 by the National Statistical Organization (NSO) :<br/><br/>1. The agriculture sector remains dominant in employment, with its share rising from about 44 per cent in 2017-18 to about 46 per cent in 2023-24.<br/>2. The share of female workers in agriculture has increased during the period 2017-18 to 2023-24.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one of the following platforms marks a transformative step in India's immunization efforts by digitizing vaccination records for pregnant women and children up to 16 years ?",
            "options": [
                "U-WIN",
                "PM-ABHIM",
                "eSanjeevani",
                "FDSI"
            ],
            "answer": "U-WIN"
        },
        {
            "question": "Which language uses the symbolic representation of machine codes needed to program a particular processor or processor family ?",
            "options": [
                "Machine Language",
                "Assembly Language",
                "High-Level Language",
                "All of the above"
            ],
            "answer": "Assembly Language"
        },
        {
            "question": "What are the uses of software ports ?<br/><br/>1. Connect client computer to server<br/>2. Connect external devices to computer<br/>3. Identify different services like email, file transfer<br/>4. Connecting peripherals like cameras, scanners<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2",
                "1 and 3",
                "2 and 3",
                "2 and 4"
            ],
            "answer": "1 and 3"
        },
        {
            "question": "Assuming the computer is a 4-bit computer, what result is produced after subtraction of 3 from 5 using the 2's complement representation ?",
            "options": [
                "0101",
                "10010",
                "1101",
                "11001"
            ],
            "answer": "10010"
        },
        {
            "question": "Which one of the following is <i>not</i> a logical operator ?",
            "options": [
                "NOT",
                "OR",
                "AND",
                "Division"
            ],
            "answer": "Division"
        },
        {
            "question": "Which among the following are the purposes of deploying a Firewall ?<br/><br/>1. Examine each packet arriving from Internet<br/>2. Prevent unauthorised access<br/>3. Block suspicious activity<br/>4. Interconnect telephones<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "1, 3 and 4",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Amsterdam-St. Paul Plateau is located in which one of the following oceanic regions ?",
            "options": [
                "Arctic Ocean",
                "North Atlantic Ocean",
                "Southern Indian Ocean",
                "South Pacific Ocean"
            ],
            "answer": "Southern Indian Ocean"
        },
        {
            "question": "Which one of the following pairs of City and Lake is <i>not</i> correctly matched ?",
            "options": [
                "Buffalo : Erie",
                "Detroit : Superior",
                "Milwaukee : Michigan",
                "Toronto : Ontario"
            ],
            "answer": "Detroit : Superior"
        },
        {
            "question": "Which of the following statements with reference to lines of latitudes is/are correct ?<br/><br/>1. The distance between two successive latitudes changes slightly from the equator to the poles.<br/>2. If parallels of latitude are drawn at an interval of one degree, the total number of parallels thus drawn, including the equator, will be 179.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Arrange the following major elements present in the Earth's crust, in ascending order, in weight percentage :<br/><br/>1. Aluminium<br/>2. Calcium<br/>3. Silicon<br/>4. Oxygen<br/><br/>Select the answer using the code given below :",
            "options": [
                "3, 4, 1, 2",
                "4, 3, 1, 2",
                "2, 1, 3, 4",
                "1, 2, 3, 4"
            ],
            "answer": "2, 1, 3, 4"
        },
        {
            "question": "Match List-I with List-II and select the answer using the code given below the Lists :<br/><br/><b>List-I (Island/Nation)</b><br/>A. Comoros<br/>B. Baffin Island<br/>C. Sri Lanka<br/>D. Andaman Islands<br/><br/><b>List-II (Tectonic Plate)</b><br/>1. North American Plate<br/>2. African Plate<br/>3. Eurasian Plate<br/>4. Indo-Australian Plate",
            "options": [
                "A-3, B-4, C-1, D-2",
                "A-3, B-1, C-4, D-2",
                "A-2, B-4, C-1, D-3",
                "A-2, B-1, C-4, D-3"
            ],
            "answer": "A-2, B-1, C-4, D-3"
        },
        {
            "question": "Which of the following statements with reference to Richter scale is/are correct ?<br/><br/>1. It is the intensity scale of an earthquake.<br/>2. Richter indicates the amount of energy released during the earthquake.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which of the following statements with reference to Glacial trough is/are correct ?<br/><br/>1. Alpine glaciers strip valleys of their soil, regolith and sediment to form glacial troughs.<br/>2. When the sea level is below the floor of a glacial trough, the seawater enters as the ice front recedes, creating a fiord.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Consider the following statements with reference to Mid-latitude deciduous forests :<br/><br/>1. Mid-latitude deciduous forests consist largely of trees that drop their leaves during the summer season.<br/>2. Mid-latitude deciduous forests are native to eastern North America and Western Europe.<br/>3. In Asia, the Mid-latitude deciduous forests occur as a belt between the boreal forest to the north and steppe lands to the south.<br/>4. Beech, Hickory and Walnut are common examples of trees found in Mid-latitude deciduous forests.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1, 2 and 3",
                "1, 2 and 4",
                "1, 3 and 4",
                "2, 3 and 4"
            ],
            "answer": "2, 3 and 4"
        },
        {
            "question": "Arrange the following permanent gases present in the atmosphere in ascending order :<br/><br/>1. Helium<br/>2. Hydrogen<br/>3. Neon<br/>4. Xenon<br/><br/>Select the answer using the code given below :",
            "options": [
                "3, 1, 2, 4",
                "3, 1, 4, 2",
                "2, 4, 1, 3",
                "2, 4, 3, 1"
            ],
            "answer": "2, 4, 1, 3"
        },
        {
            "question": "The pattern of planetary winds largely depends upon which of the following factors ?<br/><br/>1. Latitudinal variation of atmospheric heating<br/>2. The distribution of continents and oceans<br/>3. The rotation of earth<br/><br/>Which of the above is/are correct ?",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following statements with reference to Water Vapour in the atmosphere is/are correct ?<br/><br/>1. It has a role to play in the stability and instability in the air.<br/>2. It acts like a blanket allowing the earth to neither become too cold nor too hot.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following pairs with reference to world climate types and their characteristics :<br/><br/><b>(Climate) : (Characteristic)</b><br/>I. Tropical wet and dry : Winter dry season<br/>II. Mid-latitude steppe : Mid-latitude semi-arid or dry<br/>III. Humid sub-tropical : No dry season, warm summer<br/>IV. Marine west coast : No dry season, severely cold summer<br/><br/>How many of the pairs given above is/are correctly matched ?",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": "3"
        },
        {
            "question": "Identify the climate type based on the given below characteristics :<br/><br/>1. The annual precipitation is low and is around 15 cm.<br/>2. The development of pronounced winter anticyclones and their weakening in summer sets in monsoon-like reversal of wind in this region.<br/>3. Polewards, summer temperatures are low.<br/><br/>Select the answer from the options given below :",
            "options": [
                "Subtropical steppe",
                "Humid sub-tropical climate",
                "Cold climate with dry winters",
                "Tundra climate"
            ],
            "answer": "Cold climate with dry winters"
        },
        {
            "question": "Consider the following statements with reference to the Cotton textile industry in India :<br/><br/>1. Cotton textile industry has, over time, spread to other parts of the country, beyond Gujarat and Maharashtra.<br/>2. Raw cotton is not a weight-losing raw material.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Indore city in Madhya Pradesh is situated in which one of the following regions ?",
            "options": [
                "Bundelkhand",
                "Mahakoshal",
                "Malwa Plateau",
                "Nimar Region"
            ],
            "answer": "Malwa Plateau"
        },
        {
            "question": "Which among the following Classes of Towns in India holds the highest percentage of Urban Population as per the Census 2011 ?",
            "options": [
                "Class II",
                "Class III",
                "Class IV",
                "Class VI"
            ],
            "answer": "Class III"
        },
        {
            "question": "The Golden Quadrilateral Highway does <i>not</i> pass through which of the following cities ?<br/><br/>1. Bhubaneshwar<br/>2. Jaipur<br/>3. Lucknow<br/>4. Indore<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2",
                "1 and 3",
                "2 and 3",
                "3 and 4"
            ],
            "answer": "3 and 4"
        },
        {
            "question": "Consider the following statements with reference to location of Major Ports in India :<br/><br/>1. Deendayal Port is situated at the head of Gulf of Khambhat.<br/>2. Cochin Port is situated at the head of Vembanad Kayal.<br/>3. Mormugao Port is situated at the entrance of the Zuari estuary.<br/>4. Paradip Port is situated in the Godavari delta.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1 and 2",
                "1 and 3",
                "2 and 3",
                "3 and 4"
            ],
            "answer": "2 and 3"
        },
        {
            "question": "Which one among the following is <i>not</i> an atmospheric natural disaster ?",
            "options": [
                "Drought",
                "Hailstorm",
                "Frost",
                "Avalanche"
            ],
            "answer": "Avalanche"
        },
        {
            "question": "Which of the following statements with reference to National Institute of Disaster Management (NIDM) is/are correct ?<br/><br/>1. It was constituted in the year 2006.<br/>2. Under the Disaster Management Act, 2005, the Institute has been entrusted to assist in national level policy formulation with reference to Disaster Management.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which one of the following statements about 'Nilgiri', 'Surat' and 'Vaghsheer' is correct ?",
            "options": [
                "These are Tiger Reserves in the state of Gujarat.",
                "These are combatants commissioned by the Indian Navy.",
                "These are Biodiversity parks maintained by the Indian Army.",
                "These are Tiger Reserves maintained by the Indian Navy."
            ],
            "answer": "These are combatants commissioned by the Indian Navy."
        },
        {
            "question": "Which of the following surveys are being conducted by the Ministry of Statistics and Programme Implementation, Government of India ?<br/><br/>1. Survey on Social Consumption – Health<br/>2. Comprehensive Modular Survey – Telecom and ICT skills<br/>3. Periodic Labour Force Survey<br/>4. Annual Survey on Unincorporated Enterprises<br/><br/>Select the answer using the code given below :",
            "options": [
                "1, 2, 3 and 4",
                "1, 2 and 3 only",
                "3 and 4 only",
                "1 and 2 only"
            ],
            "answer": "1, 2, 3 and 4"
        },
        {
            "question": "Which of the following statements is/are correct ?<br/><br/>1. The Government of India has discontinued the Pradhan Mantri Fasal Bima Yojana.<br/>2. The Government of India has approved the continuation of Restructured Weather Based Crop Insurance Scheme.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Match List-I with List-II and select the answer using the code given below the Lists :<br/><br/><b>List-I (Organization)</b><br/>A. European Union<br/>B. Asia-Pacific Economic Cooperation (APEC)<br/>C. Association of Southeast Asian Nations (ASEAN)<br/>D. Free Trade Area of the Americas (FTAA)<br/><br/><b>List-II (Year of Formation)</b><br/>1. 1994<br/>2. 1967<br/>3. 1989<br/>4. 1993",
            "options": [
                "A-3, B-2, C-1, D-4",
                "A-2, B-3, C-4, D-1",
                "A-4, B-3, C-2, D-1",
                "A-4, B-3, C-1, D-2"
            ],
            "answer": "A-4, B-3, C-2, D-1"
        },
        {
            "question": "The book 'The Art of War' was written by :",
            "options": [
                "Niccolo Machiavelli",
                "Thucydides",
                "Thomas Hobbes",
                "J.S. Mill"
            ],
            "answer": "Niccolo Machiavelli"
        },
        {
            "question": "Which one of the following military operations was <i>not</i> undertaken by India ?",
            "options": [
                "Operation Ablaze",
                "Operation Spider's Web",
                "Operation Trident",
                "Operation Bandar"
            ],
            "answer": "Operation Spider's Web"
        },
        {
            "question": "Which of the following statements are correct about 'Arnala', an Anti-Submarine Warfare Shallow Water Craft ?<br/><br/>1. It is indigeneously designed in India.<br/>2. It is named after the historic Arnala fort located in Maharashtra.<br/>3. It has been built under a Public-Private Partnership (PPP) of GRSE with M/s L&T Shipyard.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Robert Prevost became the Catholic Pope after the death of Pope Francis. Which of the following statements is/are correct about him ?<br/><br/>1. He will now be known as Leo XV.<br/>2. He became the 271st Catholic Pope.<br/>3. He is a dual citizen of the United States of America and Peru.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2",
                "2 and 3",
                "1 only",
                "3 only"
            ],
            "answer": "3 only"
        },
        {
            "question": "Which of the statements about the dams on the Chenab river is/are correct ?<br/><br/>1. Salal dam, Aalal dam and Baglihar dams are on the Chenab river.<br/>2. Baglihar dam has a greater height than Salal dam.<br/>3. Salal dam is operated by Jammu and Kashmir Power Development Corporation and Baglihar dam is operated by NHPC Limited.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2",
                "2 and 3",
                "2 only",
                "3 only"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which of the following statements about 'Alcatraz', which was recently in news, is/are correct ?<br/><br/>1. It was once a defence fort on Alcatraz island of America.<br/>2. It was once a prison on Alcatraz island of America.<br/>3. It was once occupied by a group of native American students, known as 'Indians of all tribes'.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "1 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following statements about India's military arsenal is/are correct ?<br/><br/>1. HAMMER is a weapon system built for the Rafale fighter aircraft.<br/>2. SCALP cruise missile is also known as Storm Shadow.<br/>3. BrahMos missiles are built under a joint venture between India and Russia.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Recently, ICAR (Indian Council of Agricultural Research) has developed the world's first genome-edited rice varieties. Which of the following statements is/are correct with respect to the developed products ?<br/><br/>1. The genome-edited varieties – DRR Rice 100 (Kamla) and Pusa DST Rice 1 have been developed by ICAR-IARI, New Delhi.<br/>2. DRR Rice 100 (Kamla), based on Samba Mahsuri, has a shorter duration of maturity.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which one of the following is a good statistic to evaluate where an economy stands in the financial cycle ?",
            "options": [
                "Tax/GDP Ratio",
                "Fiscal Deficit/GDP Ratio",
                "Household Consumption/GDP Ratio",
                "Credit/GDP Ratio"
            ],
            "answer": "Credit/GDP Ratio"
        },
        {
            "question": "Which of the following pairs of initiatives of the Government of India and their objectives is/are correctly matched ?<br/><br/>1. Global Capability Centre (GCC) : Reshaping corporate landscape<br/>2. U-WIN Portal : Ease of doing business across states<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Social Mobilisation and Institution Development (SM&ID) is one of the major components of :",
            "options": [
                "Deen Dayal Antyodaya Yojana",
                "National Urban Digital Mission",
                "Atal Mission for Rejuvenation and Urban Transformation",
                "Rashtriya Gram Swaraj Abhiyan"
            ],
            "answer": "Deen Dayal Antyodaya Yojana"
        }
    ],
    "2026": [
        {
            "question": "The central cytoplasmic region of a prokaryotic cell containing nucleic acids is called :",
            "options": [
                "Nucleus",
                "Nucleoid",
                "Nucleolus",
                "Plastid"
            ],
            "answer": "Nucleoid"
        },
        {
            "question": "Nearly all infants benefit from milk, but most adults cannot properly digest milk. If an elderly person can still digest milk, his body is producing enough of which enzyme ?",
            "options": [
                "Cellulase",
                "Amylase",
                "Pectase",
                "Lactase"
            ],
            "answer": "Lactase"
        },
        {
            "question": "The antibiotic penicillin can kill invading bacteria without harming human cells because it targets bacterial :",
            "options": [
                "Cell wall",
                "Plasma membrane",
                "Ribosome",
                "Chromosome"
            ],
            "answer": "Cell wall"
        },
        {
            "question": "A researcher is studying different types of cells. In which cell type will he/she encounter the highest number of lysosomes ?",
            "options": [
                "Pancreatic cell",
                "Ovarian cell",
                "Muscle cell in the thigh of a runner",
                "White blood cell"
            ],
            "answer": "White blood cell"
        },
        {
            "question": "Which one of the following is <i>not</i> a function of the pigment carotenoid ?",
            "options": [
                "Responsible for yellow-orange hues of autumnal leaves",
                "Protecting chlorophyll from photo-oxidation",
                "Photoprotective role in our eyes",
                "Reaction centre in the pigment system"
            ],
            "answer": "Reaction centre in the pigment system"
        },
        {
            "question": "A world chess champion has curly hair, attached earlobes and freckles. Which one of the following traits is <i>not</i> likely to be passed on to his/her offsprings ?",
            "options": [
                "Chess skills",
                "Curly hair",
                "Attached earlobes",
                "Freckles"
            ],
            "answer": "Chess skills"
        },
        {
            "question": "In humans, which chamber of the heart receives oxygen-rich blood from the lungs first ?",
            "options": [
                "Left atrium",
                "Right atrium",
                "Left ventricle",
                "Right ventricle"
            ],
            "answer": "Left atrium"
        },
        {
            "question": "Consider the following statements with reference to manure and organic farming :<br/><br/>1. Vermicompost is rich in organic matter and nutrients.<br/>2. Biofertilizers and bio-pesticides are not used in organic farming.<br/>3. Crop rotation is beneficial in controlling insects, pests and weeds.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "1 and 3 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Match List-I with List-II and select the answer using the codes given below the Lists :<br/><br/>List-I (Structure/Organelle)<br/>A. Mitochondria<br/>B. Cytoskeleton<br/>C. Smooth ER<br/>D. Vacuoles<br/><br/>List-II (Function)<br/>1. Maintenance of cell shape<br/>2. Detoxification in liver cells<br/>3. Storage of chemicals and cell enlargement<br/>4. Cellular respiration",
            "options": [
                "A-4, B-2, C-1, D-3",
                "A-4, B-1, C-2, D-3",
                "A-3, B-1, C-2, D-4",
                "A-3, B-2, C-1, D-4"
            ],
            "answer": "A-4, B-1, C-2, D-3"
        },
        {
            "question": "Which one among the following pairs of diseases and their types is <i>not</i> correctly matched ?",
            "options": [
                "Polio - Viral disease",
                "Athlete's foot - Fungal disease",
                "Dengue fever - Non-viral disease",
                "Whooping cough - Bacterial disease"
            ],
            "answer": "Dengue fever - Non-viral disease"
        },
        {
            "question": "Which one of the following statements qualitatively explains the second law of motion ?",
            "options": [
                "The rate of change of angular momentum of a body is equal to the applied force.",
                "The rate of change of displacement of a body is directly proportional to the applied force.",
                "The rate of change of acceleration of a body is directly proportional to the applied force.",
                "The rate of change of momentum of a body is equal to the applied force."
            ],
            "answer": "The rate of change of momentum of a body is equal to the applied force."
        },
        {
            "question": "Which one of the following gives the triple point of water ?",
            "options": [
                "Temperature 273.16 K and Pressure 1 Pa",
                "Temperature 273.16 K and Pressure 6.11 × 10<sup>-3</sup> Pa",
                "Temperature 0 K and Pressure 10<sup>3</sup> Pa",
                "Temperature 373 K and Pressure 6.11 × 10<sup>-3</sup> Pa"
            ],
            "answer": "Temperature 273.16 K and Pressure 6.11 × 10<sup>-3</sup> Pa"
        },
        {
            "question": "Which one among the following has the least coefficient of thermal conductivity ?",
            "options": [
                "H<sub>2</sub>",
                "H<sub>2</sub>O",
                "Cu",
                "Al"
            ],
            "answer": "H<sub>2</sub>"
        },
        {
            "question": "Which one among the following generation computers used microprocessors in their hardware technology ?",
            "options": [
                "Second Generation",
                "Third Generation",
                "Fourth Generation",
                "Fifth Generation"
            ],
            "answer": "Fourth Generation"
        },
        {
            "question": "An X-ray beam can be deflected by :",
            "options": [
                "An electric field",
                "A magnetic field",
                "An electric as well as a magnetic field",
                "Neither an electric field nor a magnetic field"
            ],
            "answer": "Neither an electric field nor a magnetic field"
        },
        {
            "question": "An object is placed at a distance of 15 cm in front of a concave mirror with a radius of curvature of 20 cm. Which one among the following statements is correct for the image formed ?",
            "options": [
                "The image is 30 cm from the mirror on the same side as the object.",
                "The image is formed at a distance of 30 cm behind the mirror.",
                "The image is 60 cm from the mirror on the same side as the object.",
                "The image is formed at a distance of 60 cm behind the mirror."
            ],
            "answer": "The image is 30 cm from the mirror on the same side as the object."
        },
        {
            "question": "Which one among the following statements regarding the electrical resistivity of a conducting wire is correct ?",
            "options": [
                "The resistivity of the conductor increases if the length of the wire is increased.",
                "The resistivity of the conductor decreases if the length of the wire is increased.",
                "The resistivity of the conductor remains the same if the length of the wire is changed.",
                "The resistivity of the conductor increases if the cross-sectional area of the wire is increased."
            ],
            "answer": "The resistivity of the conductor remains the same if the length of the wire is changed."
        },
        {
            "question": "Which one among the following statements related to electric cells is correct ?",
            "options": [
                "A primary cell is rechargeable.",
                "A secondary cell can be used only once.",
                "The emf of a battery is the power provided by the battery per unit current.",
                "The unit of emf is Joule."
            ],
            "answer": "The emf of a battery is the power provided by the battery per unit current."
        },
        {
            "question": "An object is launched horizontally from a height of 45 m above the ground with a speed of 10 m/s. The time at which the object will hit the ground is : (Take g = 10 m/s<sup>2</sup>)",
            "options": [
                "6 s",
                "4 s",
                "3 s",
                "2 s"
            ],
            "answer": "3 s"
        },
        {
            "question": "Consider the following statements regarding waves :<br/><br/>1. If the particles of a medium move along the direction of motion of the wave, the wave is called a longitudinal wave.<br/>2. If the particles of a medium move perpendicular to the direction of motion of the wave, the wave is called a transverse wave.<br/>3. Transverse waves may involve change in the shape of the medium, whereas longitudinal waves involve change in the density of the medium.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 and 2 only",
                "1 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Match List-I with List-II and select the answer using the codes given below the Lists :<br/><br/>List-I (Symbol of Element)<br/>A. Sm<br/>B. Cs<br/>C. Os<br/>D. Np<br/><br/>List-II (Group of Element)<br/>1. Transition Elements<br/>2. Alkali Metals<br/>3. Actinoid Elements<br/>4. Lanthanoid Elements",
            "options": [
                "A-4, B-2, C-1, D-3",
                "A-4, B-1, C-2, D-3",
                "A-3, B-1, C-2, D-4",
                "A-3, B-2, C-1, D-4"
            ],
            "answer": "A-4, B-2, C-1, D-3"
        },
        {
            "question": "Consider the following statements regarding matter :<br/><br/>1. Elements cannot be broken down into simpler substances.<br/>2. A compound has variable composition and can be broken down into elements.<br/>3. The solution of sulphur in carbon disulphide is an example of a homogeneous mixture.<br/><br/>Which of the statements given above is/are <i>not</i> correct ?",
            "options": [
                "2 only",
                "1 and 3",
                "3 only",
                "1 and 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. Concentrated H<sub>2</sub>SO<sub>4</sub> is used as a dehydrating agent in esterification reaction.<br/>2. The hydrophilic part of soap is oil and it dissolves in water.<br/>3. Nickel is used as a catalyst in converting vegetable oil into fat.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1, 2, 3 and 4",
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Which one among the following pairs is <i>not</i> correctly matched ?",
            "options": [
                "Nitrogen : Three unpaired electrons",
                "Carbon : Tetravalent",
                "Chlorine : Two stable isotopic forms",
                "Helium : Diatomic gas"
            ],
            "answer": "Helium : Diatomic gas"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. Packaged foods are purged with nitrogen gas in order to prevent their oxidation.<br/>2. Tooth decay starts when pH of the mouth is lower than 5.5.<br/>3. The reactivity of metals decreases in the order : Mg &gt; Fe &gt; Zn.<br/><br/>Which of the statements given above is/are <i>not</i> correct ?",
            "options": [
                "2 and 3",
                "1 and 3",
                "1 and 2",
                "3 only"
            ],
            "answer": "3 only"
        },
        {
            "question": "Which one among the following pairs of compound and chemical formula is <i>not</i> correctly matched ?",
            "options": [
                "Bleaching powder : CaOCl<sub>2</sub>",
                "Soda ash : Na<sub>2</sub>CO<sub>3</sub>",
                "Baking powder : NaHCl<sub>2</sub>",
                "Plaster of Paris : 2CaSO<sub>4</sub>.H<sub>2</sub>O"
            ],
            "answer": "Baking powder : NaHCl<sub>2</sub>"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. The temporary hardness in water is due to the presence of bicarbonates of calcium.<br/>2. The permanent hardness in water is due to the presence of soluble chlorides and sulphates of calcium and magnesium.<br/>3. The permanent hardness in water is removed by adding Na<sub>2</sub>CO<sub>3</sub> to water.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which one among the following statements regarding micelles is <i>not</i> correct ?",
            "options": [
                "Soap molecules are sodium or potassium salts of long-chain carboxylic acids.",
                "Micelles precipitate out of solution because of ion-ion repulsion.",
                "Grease gets collected in the centre of the micelle.",
                "Soap micelles scatter light."
            ],
            "answer": "Micelles precipitate out of solution because of ion-ion repulsion."
        },
        {
            "question": "Consider the following statements regarding bases and alkalis :<br/><br/>1. All bases dissolve in water.<br/>2. Bases which are soluble in water are called alkalis.<br/>3. An alkali is soapy to touch, bitter and corrosive.<br/>4. Addition of water to an alkali generates heat.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1, 2, 3 and 4",
                "2, 3 and 4 only",
                "1 and 2 only",
                "3 and 4 only"
            ],
            "answer": "2, 3 and 4 only"
        },
        {
            "question": "Which of the following statements relating to the Modern Periodic Table is/are correct ?<br/><br/>1. The atomic radius increases on moving from left to right across a period.<br/>2. Germanium, Tellurium, and Copper are transition metals.<br/>3. The two isotopes of Chlorine occupy the same position in the periodic table.<br/>4. The metallic property of Ca, Ba, Be and Sr follows the order : Be &lt; Ca &lt; Sr &lt; Ba.<br/><br/>Select the answer using the codes given below :",
            "options": [
                "3 only",
                "1 and 4",
                "2 and 3",
                "3 and 4"
            ],
            "answer": "3 and 4"
        },
        {
            "question": "Which of the following computer languages is/are assembly language(s) ?<br/><br/>1. Python<br/>2. Java<br/>3. x86<br/>4. MIPS<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 only",
                "2 and 3 only",
                "3 and 4 only",
                "1, 3 and 4"
            ],
            "answer": "3 and 4 only"
        },
        {
            "question": "Which one of the following is <i>not</i> a characteristic of flash memory ?",
            "options": [
                "It is an ultraviolet erasable programmable ROM.",
                "It is an electrically erasable programmable ROM.",
                "It retains data without power.",
                "It is a non-volatile memory."
            ],
            "answer": "It is an ultraviolet erasable programmable ROM."
        },
        {
            "question": "Which one of the following statements is <i>not</i> correct with regard to the UNIX operating system ?",
            "options": [
                "It is written in C.",
                "It is portable to a variety of computers.",
                "It is a multi-user operating system.",
                "It cannot be time-shared by several users."
            ],
            "answer": "It cannot be time-shared by several users."
        },
        {
            "question": "In MP3 compression scheme, 60 minutes of music can be stored in about :",
            "options": [
                "600 MB",
                "200 MB",
                "50 MB",
                "10 MB"
            ],
            "answer": "50 MB"
        },
        {
            "question": "Code Division Multiple Access (CDMA) technology is primarily used in :",
            "options": [
                "Mobile phone communication",
                "X-ray",
                "Artificial Intelligence",
                "Colour Xerox"
            ],
            "answer": "Mobile phone communication"
        },
        {
            "question": "Which one of the following items comprises the major portion of Revenue Expenditure in Budget 2025 - 26 of the Union Government of India ?",
            "options": [
                "Pension",
                "Interest Payments",
                "Road Transport and Highways",
                "Defence Services"
            ],
            "answer": "Interest Payments"
        },
        {
            "question": "Consider the following statements with respect to Pradhan Mantri Fasal Bima Yojana (PMFBY) :<br/><br/>1. PMFBY provides risk insurance to farmers against crop damage due to non-preventable natural risks.<br/>2. PMFBY provides risk coverage of ₹ 2 lakh in case of death of the insured.<br/>3. PMFBY ensures flow of credit to the agriculture sector.<br/>4. PMFBY provides risk coverage of ₹ 2 lakh for complete disability of the insured.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 and 3",
                "1 and 3",
                "1 and 4"
            ],
            "answer": "1 and 3"
        },
        {
            "question": "Which of the following statements with respect to the Gender Inequality Index (GII) is/are correct ?<br/><br/>1. GII reflects gender-based disadvantage in work participation, property and income dimensions.<br/>2. GII reflects gender-based disadvantage in reproductive health, empowerment and the labour market dimensions.<br/>3. The value of GII ranges from 0 to 1, with a GII of 0 indicating women and men faring equally in all dimensions.<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 only",
                "3 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "The Multidimensional Poverty Index (MPI) is measured by :",
            "options": [
                "Measuring each person's overlapping deprivations across the indicators in the health, education and standard of living dimensions",
                "Measuring each person's separate efficiencies across the indicators in the wealth, income and standard of living dimensions",
                "Measuring each person's poverty on the indicators of health, happiness and ownership of vehicles",
                "Measuring inequalities and deprivations in respect of wealth, income and standard of living dimensions"
            ],
            "answer": "Measuring each person's overlapping deprivations across the indicators in the health, education and standard of living dimensions"
        },
        {
            "question": "The financial instruments that generate proceeds for investment in environmentally sustainable and climate-suitable projects are called as :",
            "options": [
                "Green Bonds",
                "Carbon Bonds",
                "Climate Credit Bonds",
                "Social Impact Bonds"
            ],
            "answer": "Green Bonds"
        },
        {
            "question": "Which one among the following sectors is included in the list of the Sunrise Sectors in India ?",
            "options": [
                "Manufacturing Sector",
                "Food Processing Sector",
                "Textile Sector",
                "Services Sector"
            ],
            "answer": "Food Processing Sector"
        },
        {
            "question": "Which of the following countries were the founding members of the South Asian Association for Regional Cooperation (SAARC), established in 1985 ?<br/><br/>1. India<br/>2. Nepal<br/>3. Maldives<br/>4. Afghanistan<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 and 2 only",
                "1, 2 and 3 only",
                "3 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1, 2 and 3 only"
        },
        {
            "question": "The Government of India has announced a 6-year Mission for <i>Aatmanirbharta</i> (Self-reliance) in Pulses with a special focus to ensure 100 percent procurement at MSP of :",
            "options": [
                "Urad, Soyabean and Masoor",
                "Tur, Urad and Masoor",
                "Masoor, Chana and Tur",
                "Moong, Tur and Soyabean"
            ],
            "answer": "Tur, Urad and Masoor"
        },
        {
            "question": "Which one among the following statements correctly defines the Infant Mortality Rate (IMR) ?",
            "options": [
                "IMR is the average number of infants born to a woman over her lifetime.",
                "IMR is the average number of infants born in a year per 1000 deaths before attaining one year of age.",
                "IMR is the number of deaths of infants under one year old per 1000 live births in a year.",
                "IMR is the number of deaths of infants under one year of age per year."
            ],
            "answer": "IMR is the number of deaths of infants under one year old per 1000 live births in a year."
        },
        {
            "question": "Which one of the following indexes is used to assess the state of governance across the States and UTs ?",
            "options": [
                "Sustainable Governance Index",
                "E-Governance Index",
                "Urban Governance Index",
                "Good Governance Index"
            ],
            "answer": "Good Governance Index"
        },
        {
            "question": "Swami Vivekananda's speech in the World Parliament of Religions at Chicago in 1893 opened with which of the following words ?",
            "options": [
                "Sisters and brothers of America",
                "Dear citizens of the world",
                "Brothers and sisters of the world",
                "Esteemed brothers and sisters"
            ],
            "answer": "Sisters and brothers of America"
        },
        {
            "question": "Who among the following was called by Gandhiji as his <i>Rajya Guru</i> in May, 1915 ?",
            "options": [
                "Bal Gangadhar Tilak",
                "Gopal Krishna Gokhale",
                "G.G. Agarkar",
                "Dadabhai Naoroji"
            ],
            "answer": "Gopal Krishna Gokhale"
        },
        {
            "question": "With reference to the Swadeshi Movement, consider the following statements :<br/><br/>1. The Swadeshi Movement had its genesis in the Anti-Partition movement, which was started to oppose the British decision to partition Bengal.<br/>2. Aurobindo Ghosh was in favour of extending the movement to the rest of India and carrying it beyond the programme of just Swadeshi and Boycott to a full-fledged political mass struggle.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "With reference to the Junagadh inscription of Rudradaman, consider the following statements :<br/><br/>1. The script of this inscription is Kharosthi and the language is Prakrit.<br/>2. The inscription records the restoration of a reservoir called Sudarshana Lake.<br/>3. It is an undated inscription.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "1 and 2 only",
                "1, 2 and 3"
            ],
            "answer": "2 only"
        },
        {
            "question": "The Bower Manuscript is known for being a valuable source on which one of the following subjects in ancient India ?",
            "options": [
                "Medicine",
                "Mathematics",
                "Astronomy",
                "Chemistry"
            ],
            "answer": "Medicine"
        },
        {
            "question": "Who among the following was the only Indian member to be present when the Vernacular Press Bill came up before the Legislative Council ?",
            "options": [
                "Jotendra Mohan Tagore",
                "Peary Mohan Mukherjea",
                "Dinshaw Petit",
                "Dadabhai Naoroji"
            ],
            "answer": "Jotendra Mohan Tagore"
        },
        {
            "question": "With reference to the Ranigumpha Cave (Odisha), consider the following statements :<br/><br/>1. Ranigumpha Cave is plain and contains no murals or sculptures.<br/>2. Ranigumpha Cave is two-storeyed.<br/>3. Ranigumpha Cave consists of an oval courtyard.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "2 only"
        },
        {
            "question": "The Mesolithic site of Bagor is one of the most well-documented sites. It is located in :",
            "options": [
                "Rajasthan",
                "Madhya Pradesh",
                "Haryana",
                "Punjab"
            ],
            "answer": "Rajasthan"
        },
        {
            "question": "Extensive pit-dwellings have been identified at the two Neolithic sites of :",
            "options": [
                "Piklihal and Maski",
                "Chirand and Tekkalkota",
                "Kodekal and Hallur",
                "Burzahom and Gufkral"
            ],
            "answer": "Burzahom and Gufkral"
        },
        {
            "question": "The Chalcolithic Ahar Culture has been identified in which of the following river systems ?",
            "options": [
                "Sarayu and Ganga river systems",
                "Krishna and Tungabhadra river systems",
                "Banas and Berach river systems",
                "Brahmaputra and Meghna river systems"
            ],
            "answer": "Banas and Berach river systems"
        },
        {
            "question": "Which one of the following is a Neolithic site ?",
            "options": [
                "Bhimbetka",
                "Utnur",
                "Adamgarh",
                "Birbhanpur"
            ],
            "answer": "Utnur"
        },
        {
            "question": "During the period 100 BCE – 200 CE, valuable evidence of India's maritime trade links has been identified from which of the following sites on the Coromandel Coast ?",
            "options": [
                "Arikamedu",
                "Tamralipti",
                "Bharukachcha",
                "Muchiri"
            ],
            "answer": "Arikamedu"
        },
        {
            "question": "Consider the following statements about the Gupta administrative system :<br/><br/>1. The Gupta kings assumed imperial titles such as <i>Maharajadhiraja</i>, <i>Parama-bhattaraka</i> and <i>Parameshvara</i>.<br/>2. The Gupta kings also connected themselves with the Gods through epithets such as <i>Parama-daivata</i> and <i>Parama-bhagavata</i>.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Who was the author of the book of travels, called <i>Rihla</i>, written in Arabic, providing extremely rich and interesting details about India ?",
            "options": [
                "Al-Biruni",
                "Ibn Battuta",
                "François Bernier",
                "Nizamuddin Ahmad"
            ],
            "answer": "Ibn Battuta"
        },
        {
            "question": "The twelfth century witnessed the emergence of a new movement in Karnataka, led by Basavanna (1106-68 CE) who was a minister in the court of a Kalachuri ruler. His followers were known as :",
            "options": [
                "Virashaivas",
                "Pushtimargis",
                "Avadhoots",
                "Nathpanthis"
            ],
            "answer": "Virashaivas"
        },
        {
            "question": "With reference to the Industrial Revolution, consider the following statements :<br/><br/>1. The Industrial Revolution saw the replacement of handicrafts by power-driven machinery.<br/>2. The industrialised countries became dependent upon other countries for the supply of raw materials necessary for their industries.<br/>3. Large-scale production started with the help of machinery in factories.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the pairs of Ashokan inscription and location is/are correctly matched ?<br/><br/>1. Jaugada : Karnataka<br/>2. Bahapur : New Delhi<br/>3. Rajula-Mandagiri : Andhra Pradesh<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 only",
                "1, 2 and 3",
                "3 only",
                "2 and 3 only"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "With reference to the Indo-Roman trade in ancient India, the term 'aurei' refers to :",
            "options": [
                "Perfume",
                "Wine",
                "Black Pepper",
                "Coins"
            ],
            "answer": "Coins"
        },
        {
            "question": "<i>Basohli</i>, a bold and intense style of miniature painting, is associated with which one of the following regions of India ?",
            "options": [
                "Bihar",
                "Chhattisgarh",
                "Madhya Pradesh",
                "Himachal Pradesh"
            ],
            "answer": "Himachal Pradesh"
        },
        {
            "question": "Which of the following factors was/were responsible for the rise of Magadha as the most powerful Mahajanapada during the 6<sup>th</sup> century BCE ?<br/><br/>1. Region of productive agriculture<br/>2. Accessibility to iron-mines<br/>3. Availability of elephants in the region<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following pairs of theories about origin of the Earth and their propounders is/are correctly matched ?<br/><br/>1. Gaseous Hypothesis : Kant<br/>2. Binary Star Hypothesis : Russell<br/>3. Planetesimal Hypothesis : Chamberlin<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which one among the following statements regarding igneous rock is correct ?",
            "options": [
                "When magma cools deep in the Earth's interior, it results in the formation of fine-grained igneous rocks.",
                "Basalt is a type of intrusive igneous rock.",
                "Most of the minerals of igneous rocks are silicates.",
                "Extrusive igneous rocks often undergo lithification."
            ],
            "answer": "Most of the minerals of igneous rocks are silicates."
        },
        {
            "question": "Consider the following statements regarding metamorphic rocks :<br/><br/>1. Ortho-metamorphic rocks are formed from igneous rocks.<br/>2. Intense heat of the intruding magmas results in metamorphism of the surrounding rocks, a process known as dynamic metamorphism.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Consider the following statements regarding Volcanic Cones :<br/><br/>1. During volcanic eruptions, acid lava cones are formed by highly viscous lavas.<br/>2. Viscous lavas have high mobility and can travel for long distances.<br/>3. Acid lavas result in the formation of high cones with steep slopes.<br/>4. Composite cones are the highest volcanic cones.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1 and 2 only",
                "2, 3 and 4 only",
                "1, 3 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1, 3 and 4 only"
        },
        {
            "question": "Consider the following statements about Mechanical Weathering :<br/><br/>1. More compact and highly consolidated rocks are least affected by freeze-thaw weathering.<br/>2. Shattering of rocks is more common in hot deserts.<br/>3. Crystalline rocks are often prone to exfoliation.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 and 2 only",
                "1 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Consider the following statements about the causes of ground surface inversion of temperature :<br/><br/>1. Ground surface inversion is also termed as radiation inversion.<br/>2. The existence of negative lapse rate results in surface inversion.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Match List-I with List-II and select the answer using the codes given below the Lists :<br/><br/>List-I (Forest type)<br/>A. Tropical Moist Forest<br/>B. Littoral and Swamp Forest<br/>C. Tropical Thorn Forest<br/>D. Alpine Forest<br/><br/>List-II (Specie)<br/>1. Kail<br/>2. Khair<br/>3. Sonneratia<br/>4. Rosewood",
            "options": [
                "A-4, B-3, C-2, D-1",
                "A-4, B-2, C-3, D-1",
                "A-1, B-2, C-3, D-4",
                "A-1, B-3, C-2, D-4"
            ],
            "answer": "A-4, B-3, C-2, D-1"
        },
        {
            "question": "Consider the following statements regarding the Northwestern Himalayas :<br/><br/>1. Karewa formations in Kashmir consist of thick deposits of glacial clay and other materials embedded with moraines.<br/>2. Pangong Tso and Tso Moriri in Ladakh are freshwater lakes.<br/>3. River Jhelum exhibits meanders in the Kashmir Valley.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "1 and 3 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Consider the following statements about the types of drought in India :<br/><br/>1. A meteorological drought occurs when the mean annual rainfall is less than 75%.<br/>2. Agricultural drought arises out of extreme moisture stress.<br/>3. Soil moisture drought is related to meteorological drought.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Match List-I with List-II and select the answer using the codes given below the Lists :<br/><br/>List-I (Forest Research Institute)<br/>A. Tropical Forest Research Institute<br/>B. Rain Forest Research Institute<br/>C. Himalayan Forest Research Institute<br/>D. Forest Research Centre for Eco-Rehabilitation<br/><br/>List-II (Location)<br/>1. Prayagraj<br/>2. Jorhat<br/>3. Jabalpur<br/>4. Shimla",
            "options": [
                "A-1, B-2, C-4, D-3",
                "A-1, B-4, C-2, D-3",
                "A-3, B-2, C-4, D-1",
                "A-3, B-4, C-2, D-1"
            ],
            "answer": "A-3, B-2, C-4, D-1"
        },
        {
            "question": "Which of the following statements about the Black Soils of India is/are correct ?<br/><br/>1. Black Soils cover most of the Deccan Plateau.<br/>2. Also known as 'Regur', they are generally clayey, deep and impermeable.<br/>3. Since they are impermeable, rainfed crops do not grow well in Black Soils.<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 and 2 only",
                "2 only",
                "1, 2 and 3",
                "3 only"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which one of the following rivers is also known by the name of \"Dihang\" in Northeast India ?",
            "options": [
                "Dikhow",
                "Brahmaputra",
                "Subansiri",
                "Teesta"
            ],
            "answer": "Brahmaputra"
        },
        {
            "question": "'Shipki La', a high altitude pass in the Himalayas, is located in :",
            "options": [
                "Chumbi Valley",
                "Brahmaputra Valley",
                "Satluj Valley",
                "Teesta Valley"
            ],
            "answer": "Satluj Valley"
        },
        {
            "question": "During chemical weathering, when minerals in feldspar change to kaolinite clays, the process is termed as :",
            "options": [
                "Carbonation",
                "Chelation",
                "Hydration",
                "Oxidation"
            ],
            "answer": "Hydration"
        },
        {
            "question": "Which one among the following pairs of National Parks and locations is <i>not</i> correctly matched ?",
            "options": [
                "Ranthambore : Rajasthan",
                "Gir : Gujarat",
                "Nandankanan : Odisha",
                "Keibul Lamjao : Arunachal Pradesh"
            ],
            "answer": "Keibul Lamjao : Arunachal Pradesh"
        },
        {
            "question": "Which one among the following is the first and the oldest Government-owned coal mining company in India ?",
            "options": [
                "Neyveli Lignite Corporation Limited",
                "Eastern Coalfields Limited",
                "Singareni Collieries Company Limited",
                "Mahanadi Coalfields Limited"
            ],
            "answer": "Singareni Collieries Company Limited"
        },
        {
            "question": "Consider the following statements regarding ocean currents :<br/><br/>1. Difference in water density is the main cause for the formation of ocean currents.<br/>2. Density of water depends on temperature, salinity and pressure.<br/>3. As a rule, ocean waters move from areas of higher density to areas of lower density as a current.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 and 2 only",
                "1 only",
                "1, 2 and 3",
                "2 and 3 only"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Consider the following statements about the Sargasso Sea :<br/><br/>1. It is the only sea without a land boundary.<br/>2. The Sargasso Sea records the lowest salinity in the Atlantic Ocean.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Match List-I with List-II and select the answer using the codes given below the Lists :<br/><br/>List-I (Type of Tide)<br/>A. Spring Tides<br/>B. Neap Tides<br/>C. Apogean Tides<br/>D. Equinoctial Spring Tides<br/><br/>List-II (Characteristic)<br/>1. Low tides caused when the Sun, Earth and Moon are in the position of quadrature<br/>2. Occur when the Moon is the farthest from the Earth<br/>3. Tides recurring at an interval of six months<br/>4. Very high tides caused when the Sun, Moon and Earth are almost in the same line",
            "options": [
                "A-3, B-1, C-2, D-4",
                "A-3, B-2, C-1, D-4",
                "A-4, B-2, C-1, D-3",
                "A-4, B-1, C-2, D-3"
            ],
            "answer": "A-4, B-1, C-2, D-3"
        },
        {
            "question": "Which of the following pairs of major sea ports of India and their characteristics are correctly matched ?<br/><br/>1. Deendayal Port : Tidal Port<br/>2. Jawaharlal Nehru Port : Landlocked Port<br/>3. V.O. Chidambaranar Port : Artificial Deep-Sea Harbour<br/>4. Paradip Port : Natural Shallow Water Port<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 3 only",
                "2 and 4 only",
                "1, 2 and 3 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Consider the following statements about the position of the Chief of Defence Staff :<br/><br/>1. He is the Head of the Department of Military Affairs within the Ministry of Defence.<br/>2. He is the Permanent Chairman of the Chiefs of Staff Committee.<br/>3. He does not exercise any military command over the three Service Chiefs.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Match List-I with List-II and select the answer using the codes given below the Lists :<br/><br/>List-I (Name of the Institution)<br/>A. Indian Military Academy<br/>B. National Defence Academy<br/>C. National Defence College<br/>D. Officers Training Academy<br/><br/>List-II (Type of Training)<br/>1. Training cadets for Short Service Commission<br/>2. Training the persons joining the Army as officers<br/>3. Training cadets of three services of Defence forces before inducting them into respective pre-commissioning training academies<br/>4. Training of selected senior officers of the armed forces and civil service officers",
            "options": [
                "A-1, B-3, C-4, D-2",
                "A-1, B-4, C-3, D-2",
                "A-2, B-3, C-4, D-1",
                "A-2, B-4, C-3, D-1"
            ],
            "answer": "A-2, B-3, C-4, D-1"
        },
        {
            "question": "Which of the following statements about 'Saansad Adarsh Gram Yojana' (SAGY) is/are correct ?<br/><br/>1. It comes under the Ministry of Parliamentary Affairs, Government of India.<br/>2. It was launched in 2014 on the birth anniversary of Jayaprakash Narayan.<br/>3. Mahatma Gandhi's vision of Gram Swaraj is the inspiration behind this scheme.<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "1 only"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Consider the following former Presidents of India :<br/><br/>1. Dr. Sarvepalli Radhakrishnan<br/>2. Dr. Zakir Hussain<br/>3. Neelam Sanjiva Reddy<br/><br/>How many of the above Presidents has/have also served as Vice-President of India ?",
            "options": [
                "None",
                "1",
                "2",
                "3"
            ],
            "answer": "2"
        },
        {
            "question": "Which one among the following statements regarding the Fundamental Rights of the Constitution of India is <i>not</i> correct ?",
            "options": [
                "They provide for equality of opportunity in matters of public employment.",
                "They guarantee freedom of conscience and free profession, practice and propagation of religion.",
                "They prohibit discrimination on the grounds only of religion, race and caste.",
                "They are legally enforceable."
            ],
            "answer": "They prohibit discrimination on the grounds only of religion, race and caste."
        },
        {
            "question": "Consider the following statements regarding the amendment procedure under Article 368 of the Constitution of India :<br/><br/>1. Constitutional amendment bills can be introduced in either House of the Parliament.<br/>2. Constitutional amendment bills should be passed in each House by a majority of the total membership of that House and by a majority of not less than two-thirds of the members of that House present and voting.<br/>3. All Constitutional amendment bills must be ratified by the Legislature of not less than one-half of the States.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 and 2 only",
                "1 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Consider the following statements regarding the qualifications of a person for appointment as a Judge of the Supreme Court of India :<br/><br/>1. The person has to be, for at least five years, a Judge of a High Court or of two or more such Courts in succession.<br/>2. The person has to be, for at least ten years, an advocate of a High Court or of two or more such Courts in succession.<br/>3. The person is, in the opinion of the Chief Justice of India, a distinguished jurist.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1, 2 and 3",
                "3 only",
                "1 and 2 only",
                "1 and 3 only"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which one among the following pairs of Article and Provision with reference to the Constitution of India is <i>not</i> correctly matched ?",
            "options": [
                "Article 243A : Gram Sabha",
                "Article 243B : Constitution of Panchayats",
                "Article 243C : Composition of Panchayats",
                "Article 243D : Election to the Panchayats"
            ],
            "answer": "Article 243D : Election to the Panchayats"
        },
        {
            "question": "Consider the following statements with regard to the UN Peacekeeping Operation :<br/><br/>1. The power to authorize a Peacekeeping Operation is exclusively vested with the General Assembly.<br/>2. UN Peacekeeping Operations are deployed with the consent of the main parties to the conflict.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which one among the following items is <i>not</i> included in the State List of the Constitution of India ?",
            "options": [
                "Public Order",
                "Economic and Social Planning",
                "Land",
                "Local Government"
            ],
            "answer": "Economic and Social Planning"
        },
        {
            "question": "Which one among the following pairs of Articles of the Constitution of India and special provisions given therein is <i>not</i> correctly matched ?",
            "options": [
                "Article 371A : Special provision with respect to the State of Nagaland",
                "Article 371B : Special provision with respect to the State of Assam",
                "Article 371C : Special provision with respect to the State of Manipur",
                "Article 371D : Special provision with respect to the State of Sikkim"
            ],
            "answer": "Article 371D : Special provision with respect to the State of Sikkim"
        },
        {
            "question": "Which of the following are administered under the Ministry of Defence, Government of India ?<br/><br/>1. Territorial Army<br/>2. Hydrographic surveys and preparation of navigational charts<br/>3. National Cadet Corps<br/>4. All matters relating to Coast Guard Organization<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1, 2, 3 and 4",
                "1, 3 and 4 only",
                "2 and 4 only",
                "1 and 3 only"
            ],
            "answer": "1, 2, 3 and 4"
        },
        {
            "question": "Consider the following statements about the powers of the Governor of a State :<br/><br/>1. The Governor has the power to appoint the Advocate-General.<br/>2. Advocate-General holds office during the pleasure of the Governor.<br/>3. The members of the State Public Service Commission are appointed by the Governor.<br/>4. The members of the State Public Service Commission can be removed by the President of India on the report of the Governor.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1, 2, 3 and 4",
                "1, 3 and 4 only",
                "2 and 4 only",
                "1, 2 and 3 only"
            ],
            "answer": "1, 2 and 3 only"
        },
        {
            "question": "Which one of the following statements about BIMSTEC (Bay of Bengal Initiative for Multi-Sectoral, Technical and Economic Cooperation) is <i>not</i> correct ?",
            "options": [
                "Bangladesh, Bhutan, India, Myanmar, Nepal, Pakistan, Sri Lanka and Thailand are member-states of BIMSTEC.",
                "Its secretariat is located in Dhaka.",
                "India is the lead country of its security sector.",
                "Thailand is the lead country of its connectivity sector."
            ],
            "answer": "Bangladesh, Bhutan, India, Myanmar, Nepal, Pakistan, Sri Lanka and Thailand are member-states of BIMSTEC."
        },
        {
            "question": "Which one of the following statements is <i>not</i> correct ?",
            "options": [
                "Chaudhary Charan Singh founded Bharatiya Kranti Dal.",
                "Jagjivan Ram was a member of the Constituent Assembly.",
                "Morarji Desai was the Prime Minister of India from 1977 to 1980.",
                "Jayaprakash Narayan was the founder General Secretary of the Congress Socialist Party."
            ],
            "answer": "Morarji Desai was the Prime Minister of India from 1977 to 1980."
        },
        {
            "question": "Which one of the following Acts is correctly paired with the year of its enactment ?",
            "options": [
                "The Consumer Protection Act : 2012",
                "The Right to Information Act : 2004",
                "The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act : 2006",
                "The Protection of Children from Sexual Offences Act : 2010"
            ],
            "answer": "The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act : 2006"
        },
        {
            "question": "Which of the following statements related to the National Commission for Backward Classes is/are correct ?<br/><br/>1. It is a constitutional body.<br/>2. The National Commission for Backward Classes Act, 1993 has been repealed.<br/>3. The Secretary, Ministry of Social Justice and Empowerment, Government of India heads the Commission.<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "1 only"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which of the following acts/behaviour shall amount to 'sexual harassment' as per the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 ?<br/><br/>1. Verbal remarks of sexual nature<br/>2. Non-verbal conduct of sexual nature<br/>3. Physical conduct of sexual nature<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which among the following tribes inhabit the Andaman and Nicobar Islands ?<br/><br/>1. Onge<br/>2. Jarawas<br/>3. Sentinelese<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "1 and 3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Arrange the following dignitaries in the correct sequence with respect to their rank precedence, as per the 'Table of Precedence' approved by the President of India :<br/><br/>1. Chief Justice of India<br/>2. Governors within their respective states<br/>3. Former Presidents<br/>4. Deputy Prime Minister<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1, 3, 4, 2",
                "2, 3, 4, 1",
                "1, 2, 4, 3",
                "2, 3, 1, 4"
            ],
            "answer": "2, 3, 4, 1"
        },
        {
            "question": "Which of the following statements about the 'SMART VILLAGE' project, launched by the Council of Scientific and Industrial Research (CSIR) is/are correct ?<br/><br/>1. This is a pilot project, which focuses on the integrated village development.<br/>2. The distinctive aspect of this project is that CSIR is following the guiding principle of 'Land to Lab' in improving the condition of villages through indigenous technologies.<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which of the following measures has/have been undertaken by the Government of India for supporting the cotton exporters and the textile sector ?<br/><br/>1. Credit Guarantee Scheme for Exporters (CGSE)<br/>2. RBI Trade Relief 2025<br/>3. Rebate of State and Central Taxes and Levies (RoSCTL) for cotton and cotton-based products<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1, 2 and 3",
                "2 and 3 only",
                "1 and 3 only",
                "2 only"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Which of the following statements about Government programmes/schemes is/are correct ?<br/><br/>1. Skill Training of Rural Youth (STRY) is a programme meant for improving skills of the rural youth in different thematic areas of agriculture.<br/>2. Deendayal Antyodaya Yojana – National Rural Livelihoods Mission (DAY - NRLM) focuses on creating income generation opportunities for Self-Help Group (SHG) women.<br/>3. Start-up Village Entrepreneurship Programme (SVEP) is meant for creating an enabling rural business development ecosystem for supporting all women except for those engaged with Self-Help Groups (SHGs).<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1, 2 and 3",
                "1 and 2 only",
                "2 and 3 only",
                "3 only"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which one of the following schemes is <i>not</i> meant for the development of agriculture sector in India ?",
            "options": [
                "Pradhan Mantri Kisan Maandhan Yojana (PM-KMY)",
                "Modified Interest Subvention Scheme (MISS)",
                "PM SVANidhi",
                "National Food Security and Nutrition Mission"
            ],
            "answer": "PM SVANidhi"
        },
        {
            "question": "Which of the following statements is/are <i>not</i> correct ?<br/><br/>1. The 3<sup>rd</sup> WHO Global Summit on Traditional Medicine was held in New Delhi in December 2025.<br/>2. The theme for the 11<sup>th</sup> International Yoga Day 2025 was 'Yoga for One Earth, One Health'.<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which one of the following statements about the bridges of India is <i>not</i> correct ?",
            "options": [
                "Atal Setu, also known as the Mumbai Trans Harbour Link, is India's longest sea bridge.",
                "The Chenab bridge is the world's highest railway arch bridge.",
                "The Bhupen Hazarika Setu is built over the Lohit river.",
                "The New Pamban bridge is an arch bridge."
            ],
            "answer": "The New Pamban bridge is an arch bridge."
        },
        {
            "question": "Which of the following statements about India's Green Energy target is/are correct ?<br/><br/>1. ONGC Green has set a plan to achieve 10 GW of green energy capacity by 2030.<br/>2. ONGC Green and IIM Nagpur have signed a Memorandum of Understanding (MoU), which aims at contributing to India's broader goal of achieving net zero emissions by 2050.<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "In which one of the following cities of India was the PESA (Panchayats (Extension to Scheduled Areas)) Mahotsav 2025 held ?",
            "options": [
                "Visakhapatnam",
                "Kochi",
                "Ranchi",
                "Raipur"
            ],
            "answer": "Ranchi"
        },
        {
            "question": "The Sujalam Bharat App, launched in December 2025, aims at :",
            "options": [
                "Monitoring irrigation facilities being provided to farmers",
                "Achieving the goal of cleaning river water",
                "Resolving the grievances related to drinking water-supply in the NCT of Delhi",
                "Transforming rural drinking water governance"
            ],
            "answer": "Transforming rural drinking water governance"
        },
        {
            "question": "Operation Sagar Bandhu was launched by India to provide Search & Rescue and Humanitarian Assistance & Disaster Relief (HADR) support to which one of the following countries ?",
            "options": [
                "Thailand",
                "Sri Lanka",
                "Indonesia",
                "Vietnam"
            ],
            "answer": "Sri Lanka"
        },
        {
            "question": "India and New Zealand have signed a Free Trade Agreement (FTA) in December 2025. In which of the following areas has cooperation under the FTA has been agreed upon between the two countries ?<br/><br/>1. AYUSH<br/>2. Audio-Visual tourism<br/>3. Traditional knowledge system<br/>4. Horticulture<br/><br/>Select the answer using the codes given below :",
            "options": [
                "1, 2, 3 and 4",
                "2 and 4 only",
                "1 and 3 only",
                "1, 3 and 4 only"
            ],
            "answer": "1, 2, 3 and 4"
        },
        {
            "question": "Which one of the following statements is correct about the PM-MITRA scheme ?",
            "options": [
                "Its goal is to develop at least one energy park, in every state of India.",
                "It aims at developing integrated textile parks in India.",
                "Its goal is to open employment parks in every district of India.",
                "It aims at opening agro parks in India."
            ],
            "answer": "It aims at developing integrated textile parks in India."
        },
        {
            "question": "Who, amongst the following, was <i>not</i> a part of the Indian Squash team that won the first ever World Cup title at the SDAT Squash World Cup 2025 ?",
            "options": [
                "Joshna Chinnappa",
                "Anahat Singh",
                "Abhay Singh",
                "Arjun Erigaisi"
            ],
            "answer": "Arjun Erigaisi"
        },
        {
            "question": "Defence Research and Development Organization (DRDO) and Rashtriya Raksha University (RRU) have signed a Memorandum of Understanding (MoU) in December 2025. Which of the following statements is/are correct in the context of this MoU ?<br/><br/>1. This MoU aims to foster collaboration in the areas of training and technology support for defence and internal security.<br/>2. RRU is an institution of eminence under the Ministry of Education, Government of India.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Who among the following has recently scripted history by becoming the first Indian cricketer to secure 100 wickets and 1000 runs in T20 Internationals ?",
            "options": [
                "Hardik Pandya",
                "Ravindra Jadeja",
                "Axar Patel",
                "Washington Sundar"
            ],
            "answer": "Hardik Pandya"
        }
    ],
    "2024-I": [
        {
            "question": "Consider the following statements about the Jorwe culture of the Deccan :<br/><br/>1. It covers, practically, the whole of modern Maharashtra except the coastal Konkan district.<br/>2. The Pravara-Godavari valleys seem to have been the nuclear zone.<br/>3. The large sites of this culture yield evidence of shifting agriculture.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Consider the following statements about Madurai, the capital city of the Pandya kingdom :<br/><br/>1. It has been described in <i>Maduraikkanchi</i> as a large grand city, enclosed by walls on three sides and the Vaigai river on the fourth side.<br/>2. The <i>Arthashastra</i> mentions it as a centre of fine cotton textiles.<br/>3. Other literary sources describe it as a major craft centre.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Consider the following statements about Sawai Jai Singh's astronomical work :<br/><br/>1. He learnt of the accuracy of European observations, and obtained de La Hire's tables from which he reproduced a refraction table.<br/>2. His astronomers also developed a telescope of their own to observe the lunar phases of Venus.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "<i>Man Kautuhal</i>, a work on music, was prepared under the aegis of",
            "options": [
                "Raja Man Singh of Gwalior",
                "Tansen",
                "Meera Bai",
                "Amir Khusrau"
            ],
            "answer": "Raja Man Singh of Gwalior"
        },
        {
            "question": "Consider the following statements regarding the Sugamya Bharat Abhiyan :<br/><br/>1. This programme is initiated by the Department of Empowerment of Persons with Disabilities, Ministry of Social Justice and Empowerment.<br/>2. It aims to develop an inclusive society for persons with disabilities.<br/>3. It has provisions of pension for persons with disabilities.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1, 2 and 3",
                "1 and 2 only",
                "2 and 3 only",
                "1 only"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which one among the following was <i>not</i> a part of the action programme of the Non-Cooperation Movement?",
            "options": [
                "The Congress organisation was to reach down to the village and the Mohalla level",
                "Boycott of government affiliated schools and colleges",
                "Taking control of the law and order machinery of the State by the Congress Working Committee",
                "Surrender of titles and honours given by the government"
            ],
            "answer": "Taking control of the law and order machinery of the State by the Congress Working Committee"
        },
        {
            "question": "Consider the following statements about the Mauryan State and the forest people :<br/><br/>1. The forest people were subjected to new forms of political and economic dominance and the necessity to subordinate and assimilate them led to a change in the earlier attitude of excluding these people from imperial territory.<br/>2. The State recognised that the forest produce was the sole monopoly of the forest people.<br/>3. The State was concerned with the conservation of forests and to this end the burning of forests was prohibited.<br/>4. The forest people could be harnessed to serve the State and could be used as troops, spies and assassins.<br/><br/>How many of the above statements is/are correct?",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": "3"
        },
        {
            "question": "At which of the following places was diamond mining carried out during the Delhi Sultanate period?",
            "options": [
                "Awadh",
                "Khambhat",
                "Panna",
                "Lakhnauti"
            ],
            "answer": "Panna"
        },
        {
            "question": "Which one of the following statements is true for James Webb Space Telescope launched in December 2021?",
            "options": [
                "It orbits the Sun, about 15 lakh km away from the Earth.",
                "It orbits the Earth, about 15 lakh km away.",
                "It is stationary in space nearly 10 lakh km away from the Earth.",
                "It revolves around the Moon nearly 3&middot;5 lakh km away from the Earth."
            ],
            "answer": "It orbits the Sun, about 15 lakh km away from the Earth."
        },
        {
            "question": "Which of the following particles are subatomic particles?<br/><br/>1. Electron<br/>2. Proton<br/>3. Neutron<br/>4. Muon<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 4 only",
                "1, 2, 3 and 4",
                "2 and 3 only",
                "1, 2 and 3 only"
            ],
            "answer": "1, 2, 3 and 4"
        },
        {
            "question": "Qubit refers to a two-valued quantity used in",
            "options": [
                "classical computers",
                "classical cryptography",
                "quantum computers",
                "lasers"
            ],
            "answer": "quantum computers"
        },
        {
            "question": "Photo 51 refers to an image of",
            "options": [
                "a crater on the Moon",
                "DNA molecules",
                "the virus responsible for COVID-19",
                "the virus responsible for common cold"
            ],
            "answer": "DNA molecules"
        },
        {
            "question": "The rest mass of Higgs boson is estimated to be close to",
            "options": [
                "0&middot;5 MeV",
                "900 MeV",
                "100 GeV",
                "1000 GeV"
            ],
            "answer": "100 GeV"
        },
        {
            "question": "Which one of the following correctly describes the principle of the working of an atomic clock?",
            "options": [
                "Vibration of a small quartz crystal",
                "Simple harmonic motion of atoms inside a crystal",
                "Resonant frequency in cesium (or rubidium) atom",
                "Excitation and de-excitation of hydrogen atoms"
            ],
            "answer": "Resonant frequency in cesium (or rubidium) atom"
        },
        {
            "question": "Political analysis involves both normative and empirical approaches. Which of the following statements is/are correct about the two approaches?<br/><br/>1. Knowledge acquired through the empirical approach is value-loaded.<br/>2. Knowledge acquired through the normative approach is objectively neutral.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Neither 1 nor 2"
        },
        {
            "question": "Which one amongst the following <i>cannot</i> be a feature of a 'totalitarian regime'?",
            "options": [
                "State control of the political and often personal realms of individual life",
                "A monopoly of the means of mass communication",
                "One-party State",
                "Autonomy of civil society"
            ],
            "answer": "Autonomy of civil society"
        },
        {
            "question": "Which of the following statements are <i>not</i> correct?<br/><br/>1. In world politics, 'hard power' can be exercised by both States and other actors involving use of threat or coercion.<br/>2. Globalisation is necessarily economic, not cultural.<br/>3. The term 'Washington Consensus' refers to a policy that seeks intervention in the market.<br/>4. 'Autarky' is generally understood as economic 'self-sufficiency'.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 4 only",
                "2 and 3 only",
                "2, 3 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. Under Part III of the Constitution of India, individuals can enforce rights guaranteed by this Part when they are violated by the action of a government authority.<br/>2. Under Part III of the Constitution of India, individuals can enforce rights guaranteed by this Part when they are violated by not only the action of a government authority, but also by its inaction.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. The International Covenant on Civil and Political Rights (ICCPR) provides that everyone shall have the right to recognition everywhere as a person before the law.<br/>2. Although India agrees in principle with the ethos of ICCPR, it has not yet ratified it fully.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which of the following statements with respect to the right to have a legal aid is/are correct?<br/><br/>1. Under the Constitution of India, it is given under the Directive Principles of State Policy.<br/>2. It is the duty of the police to inform the nearest Legal Aid Committee immediately after the arrest of a person.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements as per the 'Universal Declaration of Human Rights' is/are correct?<br/><br/>1. The Declaration provides that everyone has a right to seek and enjoy in other country's asylum from prosecution in respect of political crimes.<br/>2. The Declaration provides that everyone has the freedom from arbitrary deprival of nationality, except for the freedom to change nationality.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which of the following UN organisations has been awarded with Nobel Prize twice?",
            "options": [
                "IPCC",
                "IAEA",
                "UNHCR",
                "UNICEF"
            ],
            "answer": "UNHCR"
        },
        {
            "question": "Which of the following statements is/are correct about vaccination that provides protection against an infectious disease?<br/><br/>1. It blocks the entry of the infectious agent into body.<br/>2. It produces antibodies against infection.<br/>3. It kills the infectious agent when it enters in the body.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which cells in human body have <i>no</i> nucleus?",
            "options": [
                "Muscle cells",
                "Phagocytic cells",
                "Red blood cells",
                "Ciliated cells"
            ],
            "answer": "Red blood cells"
        },
        {
            "question": "The use of plastics has led to a number of environment-related problems. For this, which one of the following statements is correct?",
            "options": [
                "They are non-biodegradable.",
                "They do not get released into water and food.",
                "They do not have any biochemical synthesis activity.",
                "They are harmless to humans."
            ],
            "answer": "They are non-biodegradable."
        },
        {
            "question": "Microbodies found to be present in plant and animal cells contain",
            "options": [
                "broken down membranes",
                "enzymes",
                "acidic fluids",
                "waste metabolites"
            ],
            "answer": "enzymes"
        },
        {
            "question": "An antibacterial enzyme present in saliva and tears is called",
            "options": [
                "ribozyme",
                "lipase",
                "lysozyme",
                "isomerase"
            ],
            "answer": "lysozyme"
        },
        {
            "question": "Which set of vegetables is underground stem or modified stem of a plant?",
            "options": [
                "Potato, artichoke, round gourd",
                "Onion, garlic, carrot",
                "Potato, onion, garlic",
                "Potato, garlic, turnip"
            ],
            "answer": "Potato, onion, garlic"
        },
        {
            "question": "Which of the following indicators is/are used to observe the monetary transmission mechanism in the economy?<br/><br/>1. Weighted average lending rate<br/>2. Weighted average domestic term deposit rate<br/>3. 1-year median MCLR<br/>4. SDF rate<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "1, 2 and 3",
                "3 and 4",
                "4 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Consider the following statements regarding instruments of monetary policy :<br/><br/>1. Standing deposit facility (SDF) rate was introduced in April 2022.<br/>2. SDF rate replaced fixed reverse repo rate as the floor of the LAF corridor.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following statements regarding weightage of different articles in Wholesale Price Index (WPI) :<br/><br/>1. Fuel and power have higher weightage in WPI than that of primary articles.<br/>2. Weightage of manufactured products in WPI is higher than that of fuel and power.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "If India enters into Free Trade Agreements (FTAs) with other nations, then the growth of exports of India would depend upon which of the following?<br/><br/>1. Extent of tariff reduction vis-&agrave;-vis MFN tariffs<br/>2. Extent of relaxation in terms of rules of origin<br/>3. Extent of relaxation in sanitary and phytosanitary measures<br/>4. Level of infrastructure in India<br/>5. Income in nations with which India enters into FTAs<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1, 3 and 4 only",
                "1, 2 and 4 only",
                "2, 3 and 5 only",
                "1, 2, 3, 4 and 5"
            ],
            "answer": "1, 2, 3, 4 and 5"
        },
        {
            "question": "Which one of the following is an amphoteric oxide?",
            "options": [
                "MgO",
                "P<sub>4</sub>O<sub>10</sub>",
                "Na<sub>2</sub>O",
                "Al<sub>2</sub>O<sub>3</sub>"
            ],
            "answer": "Al<sub>2</sub>O<sub>3</sub>"
        },
        {
            "question": "The correct order of octane number of butane, pentane, hexane and cyclohexane is",
            "options": [
                "butane &gt; pentane &gt; hexane &gt; cyclohexane",
                "butane &gt; pentane &gt; cyclohexane &gt; hexane",
                "butane &gt; cyclohexane &gt; pentane &gt; hexane",
                "cyclohexane &gt; butane &gt; pentane &gt; hexane"
            ],
            "answer": "butane &gt; cyclohexane &gt; pentane &gt; hexane"
        },
        {
            "question": "Which one of the following is the correct order of reactivity of Mg, Al, Zn and Fe with HCl?",
            "options": [
                "Mg &gt; Al &gt; Zn &gt; Fe",
                "Mg &gt; Al &gt; Fe &gt; Zn",
                "Zn &gt; Fe &gt; Mg &gt; Al",
                "Fe &gt; Al &gt; Zn &gt; Mg"
            ],
            "answer": "Mg &gt; Al &gt; Zn &gt; Fe"
        },
        {
            "question": "Methanol is toxic because",
            "options": [
                "methanol coagulates the protoplasm",
                "methanol gets oxidised to methanal in liver which coagulates the protoplasm",
                "methanol gets oxidised to acetic acid in liver which coagulates the protoplasm",
                "methanol gets oxidised to CO in liver which coagulates the protoplasm"
            ],
            "answer": "methanol gets oxidised to methanal in liver which coagulates the protoplasm"
        },
        {
            "question": "Vinegar is",
            "options": [
                "5&ndash;8% solution of acetic acid in water",
                "5&ndash;8% solution of carbonic acid in water",
                "5&ndash;8% solution of ethanol in water",
                "10&ndash;15% solution of propionic acid in water"
            ],
            "answer": "5&ndash;8% solution of acetic acid in water"
        },
        {
            "question": "Which one of the following is related to global dimming?",
            "options": [
                "Fall of atmospheric pressure due to increased particulates",
                "Raise of atmospheric pressure due to increased particulates",
                "Raise of temperature due to increased particulates",
                "Fall of temperature due to increased particulates"
            ],
            "answer": "Fall of temperature due to increased particulates"
        },
        {
            "question": "Which one of the following is known as cetane?",
            "options": [
                "Hexadecane",
                "Heptadecane",
                "Octadecane",
                "Nonadecane"
            ],
            "answer": "Hexadecane"
        },
        {
            "question": "Which one among the following countries is <i>not</i> part of the Arabian Peninsula?",
            "options": [
                "Kuwait",
                "Oman",
                "Jordan",
                "Yemen"
            ],
            "answer": "Jordan"
        },
        {
            "question": "Which of the following statements regarding continent of Antarctica is/are correct?<br/><br/>1. It has the highest average elevation as compared to all other continents.<br/>2. Mount Vinson is the highest peak of this continent.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one of the following biosphere reserves is spread over three States in India?",
            "options": [
                "Nilgiri",
                "Achanakmar-Amarkantak",
                "Seshachalam",
                "Agasthyamalai"
            ],
            "answer": "Nilgiri"
        },
        {
            "question": "Which one of the following pairs is <i>not</i> correctly matched?",
            "options": [
                "Ramnagar Wildlife Sanctuary : Uttarakhand",
                "Chakrashila Wildlife Sanctuary : Assam",
                "Nahar Wildlife Sanctuary : Haryana",
                "Kane Wildlife Sanctuary : Arunachal Pradesh"
            ],
            "answer": "Ramnagar Wildlife Sanctuary : Uttarakhand"
        },
        {
            "question": "Which of the following statements regarding coconut production in Lakshadweep is/are correct?<br/><br/>1. Productivity per hectare is highest in India.<br/>2. Oil content in nuts is highest in the world.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements regarding barrier islands is/are correct?<br/><br/>1. These are small chain of sand islands that form offshore, far from the coast.<br/>2. Lagoons or shallower marshes separate the barrier islands from the mainland.<br/>3. Such locations are hazardous for settlements because they are easily swept away by storms and hurricanes.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Identify the type of cloud on the basis of the given characteristics :<br/><br/>1. High, thin, puffy white clouds of ice crystals that look like ripples<br/>2. They appear between 20000 feet and 40000 feet above the Earth's surface<br/>3. One of its types is called a 'mackerel sky' because the clouds resemble large fish scales, especially when they are coloured pink at sunset<br/><br/>Select the correct answer.",
            "options": [
                "Altostratus",
                "Cirrostratus",
                "Altocumulus",
                "Cirrocumulus"
            ],
            "answer": "Cirrocumulus"
        },
        {
            "question": "Identify the type of drainage pattern on the basis of the given characteristics :<br/><br/>1. It represents the most common pattern of streams and their tributaries<br/>2. It occurs in areas of uniform rock type and regular slope<br/>3. A map, or aerial photograph, shows a pattern like the veins on a leaf&mdash;smaller streams join the main stream at an acute angle<br/><br/>Select the correct answer.",
            "options": [
                "Dendritic",
                "Radial",
                "Trellis",
                "Centripetal"
            ],
            "answer": "Dendritic"
        },
        {
            "question": "Which of the following regarding gateway city is/are correct?<br/><br/>1. City whose physical location makes it a link between one country and others, or between one region and others<br/>2. A gateway city exercises control over a large area because it commands the entry and exit rights and powers for a particular country or region<br/>3. Most gateway cities are ports, many of which were formerly administrative centres for a colonial government<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which one of the following has been an important early Chola painting discovered at the Brihadisvara Temple, Thanjavur in 1931?",
            "options": [
                "Buddha with Chauri-bearers on either side",
                "Shiva as Yoga-Dakshinamurti",
                "Yakshi Kali",
                "Parshvanatha with snake-hood on a lion-throne"
            ],
            "answer": "Shiva as Yoga-Dakshinamurti"
        },
        {
            "question": "Consider the following statements about the initial development of railways in India by the British :<br/><br/>1. Private financial investors for railways would get land free from the British Government in India.<br/>2. The investors would get a return of 5 percent on their capital from the government if they ran at a loss or secured inadequate profit.<br/>3. The railways would be jointly managed with the government.<br/><br/>How many of the above statements is/are correct?",
            "options": [
                "1",
                "2",
                "3",
                "None"
            ],
            "answer": "3"
        },
        {
            "question": "Which of the following industries was most affected by the 'deindustrialisation' of India in the 19th century?",
            "options": [
                "Silk manufacture",
                "Cotton textiles",
                "Iron and steel",
                "Woolen manufacture"
            ],
            "answer": "Cotton textiles"
        },
        {
            "question": "Consider the following statements about the early phase of the National Movement in India :<br/><br/>1. Ferozeshah Mehta, Badruddin Tyabji and others formed the Bombay Presidency Association.<br/>2. Surendranath Banerjee and his group planned an Indian National Conference at Calcutta.<br/>3. Allan Octavian Hume decided to create an all-India body as a rival to the above organisations to give vent to the grievances of the poor and marginalised Indians.<br/><br/>How many of the above statements is/are correct?",
            "options": [
                "1",
                "2",
                "All",
                "None"
            ],
            "answer": "2"
        },
        {
            "question": "The Giant Metrewave Radio Telescope consists of",
            "options": [
                "a single parabolic antenna",
                "multiple parabolic antennas",
                "multiple circular antennas",
                "a combination of circular and parabolic antennas"
            ],
            "answer": "multiple parabolic antennas"
        },
        {
            "question": "Which one of the following is the first commercial space station?",
            "options": [
                "Axiom Station",
                "International Space Station",
                "Galileo",
                "Voyager 1"
            ],
            "answer": "Axiom Station"
        },
        {
            "question": "Which one of the following is <i>not</i> a ferromagnetic material?",
            "options": [
                "Cobalt",
                "Iron",
                "Silver",
                "Ferric chloride"
            ],
            "answer": "Silver"
        },
        {
            "question": "On a day when I am in hurry to go to office, I have a fixed quantity of rice which was just cooked and kept in a bowl. In order to cool it quickly, which one of the following is the best option?",
            "options": [
                "Let it be kept on the table in a room where there is no fan, no air conditioner",
                "Let it be kept in a room with AC set at a temperature around 23 &deg;C and a ceiling fan (or table fan) operating at slow speed",
                "Let it be kept in a bowl of water (at room temperature) and operating a ceiling fan (or table fan) at full speed",
                "Let it be kept in a bowl of water at room temperature only"
            ],
            "answer": "Let it be kept in a bowl of water (at room temperature) and operating a ceiling fan (or table fan) at full speed"
        },
        {
            "question": "Which of the following statements about 'Marrakech Partnership' is/are correct?<br/><br/>1. It is an intergovernmental partnership for global climate action.<br/>2. It is not only an intergovernmental partnership for global climate action but also a collaboration between governments and other stakeholders like cities, businesses and investors.<br/>3. This partnership is guided by the 2030 Agenda for Sustainable Development.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "1 and 3 only",
                "1, 2 and 3",
                "2 only"
            ],
            "answer": "2 only"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. In India, the Special Marriage Act protects an individual if one enters into an interreligious marriage.<br/>2. Right to marry a person of one's choice is an integral aspect of one's Fundamental Rights under Article 21 of the Constitution of India.<br/>3. The Universal Declaration of Human Rights also resonates marital rights of every adult consenting individuals.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3",
                "1 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following statements about the International Court of Justice is/are correct?<br/><br/>1. The Court consists of members, wherein two members cannot be nationals of the same State.<br/>2. The General Assembly and the Security Council proceed independently of one another to elect the members of the Court.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following statements regarding Bhoonidhi Vista :<br/><br/>1. It is a data visualisation service of Bhoonidhi providing full resolution mosaicked data visualisation capability through Web Map Service.<br/>2. It is enabled for ResourceSat-2/2A, Sentinel 1 and 2 satellites.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following were objectives of the G20 Summit, 2023 under India's Presidency?<br/><br/>1. Green development<br/>2. Accelerating progress on SDGs<br/>3. Women-led development<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "1 and 3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "The causal organism of dengue fever is a mosquito-borne virus which belongs to which one among the following categories?",
            "options": [
                "Flavi-ribo virus",
                "Adenovirus",
                "Vaccinia virus",
                "Nipah virus"
            ],
            "answer": "Flavi-ribo virus"
        },
        {
            "question": "From which among the following are blood clotting factors released?",
            "options": [
                "RBCs",
                "Eosinophils",
                "Platelets",
                "Monocytes"
            ],
            "answer": "Platelets"
        },
        {
            "question": "Pulse is felt due to the rhythmic contraction and relaxation of the",
            "options": [
                "chambers of heart",
                "valves present in veins",
                "aorta and main arteries",
                "valves of heart"
            ],
            "answer": "aorta and main arteries"
        },
        {
            "question": "When eggs are heated, the transparent liquid portion around yolk turns solid and turbid white. This happens due to the thermal denaturation of",
            "options": [
                "fats",
                "proteins",
                "ribose sugar",
                "carbohydrates"
            ],
            "answer": "proteins"
        },
        {
            "question": "Which of the following statements is/are correct?<br/><br/>1. GDP deflator captures the average price of an unchanging basket of commodities that constitutes the GDP of the country.<br/>2. GDP deflator can be used to measure the real GDP of the economy but not the inflation rate.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Neither 1 nor 2"
        },
        {
            "question": "Which of the following statements is/are correct?<br/><br/>1. A price index captures the change in the average price of a constant basket of commodities.<br/>2. If the price index takes values 100, 110 and 121 in three consecutive years respectively, then the inflation rates in the 2nd and 3rd years are 10% and 21% respectively.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which of the following statements is/are correct?<br/><br/>1. Most of India's reserves is held in the form of foreign currency.<br/>2. There is no cost of holding foreign currency as reserves by a nation.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which one of the following statements is <i>not</i> correct?",
            "options": [
                "The market mechanism over-produces a good that generates positive externality.",
                "A cap and trade of pollution permits can be used by the government to achieve the social optimum.",
                "The optimal amount of subsidy in the case of an activity that produces a positive externality is the difference between the social benefit and the private benefit at the optimum.",
                "Tragedy of Commons is an example of negative externality."
            ],
            "answer": "The market mechanism over-produces a good that generates positive externality."
        },
        {
            "question": "Which one of the following statements regarding GST is <i>not</i> correct?",
            "options": [
                "Amendment 115 to the Constitution of India kept alcohol for human use and five petroleum products outside the ambit of GST.",
                "Amendment 122 to the Constitution of India kept only alcohol for human use outside the ambit of GST.",
                "Precious metals are taxed at a rate of 1% under GST.",
                "Unworked diamond is taxed at a rate of 0&middot;25%."
            ],
            "answer": "Precious metals are taxed at a rate of 1% under GST."
        },
        {
            "question": "Which of the following statements with regard to the Report of Tendulkar Committee (2009) on poverty estimates is/are correct?<br/><br/>1. The Committee had used an all-India urban poverty line basket as a reference to derive both rural and urban poverty levels.<br/>2. The Committee had anchored the poverty line to the official food calorie norms.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which of the following components of Central Government taxes on petroleum products is/are <i>not</i> shareable with the States?<br/><br/>1. Basic Excise Duty<br/>2. Additional Excise Duty<br/>3. Special Additional Excise Duty<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "1, 2 and 3",
                "3 only",
                "2 and 3 only"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Level of per capita GDP depends upon which of the following?<br/><br/>1. Proportion of population in the working age<br/>2. Work participation rate<br/>3. Per worker productivity<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "3 only",
                "1 and 3 only",
                "1 and 2 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following are included in M1 definition of money for the Indian economy?<br/><br/>1. Reserves<br/>2. Currency<br/>3. Time deposits<br/>4. Demand deposits<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 3 only",
                "2 and 3",
                "2 and 4",
                "1, 3 and 4"
            ],
            "answer": "2 and 4"
        },
        {
            "question": "Which one of the following statements is <i>not</i> correct for National Income Accounting for India?",
            "options": [
                "Imports are subtracted in calculating Gross Domestic Product.",
                "Net factor payments earned from abroad are included in Gross Domestic Product.",
                "Purchase and sale of second-hand goods are not included in Gross Domestic Product.",
                "Inventories are included in Gross Domestic Capital Formation."
            ],
            "answer": "Net factor payments earned from abroad are included in Gross Domestic Product."
        },
        {
            "question": "Under normal downward sloping demand curve and fully elastic supply curve of a commodity, an exogenous decrease in demand would lead to",
            "options": [
                "increase in equilibrium price and quantity",
                "decrease in equilibrium price and quantity",
                "decrease in equilibrium quantity and no change in price",
                "increase in equilibrium price and no change in quantity"
            ],
            "answer": "decrease in equilibrium quantity and no change in price"
        },
        {
            "question": "The correct order of atomic radius of Li, Na, Be and O is",
            "options": [
                "Na &gt; Li &gt; Be &gt; O",
                "Na &gt; Be &gt; Li &gt; O",
                "Be &gt; Li &gt; Na &gt; O",
                "O &gt; Be &gt; Li &gt; Na"
            ],
            "answer": "Na &gt; Li &gt; Be &gt; O"
        },
        {
            "question": "Which of the following catalytic systems is used for the reduction of unsaturated hydrocarbon to saturated hydrocarbon?",
            "options": [
                "Copper and H<sub>2</sub>",
                "Iron and H<sub>2</sub>",
                "Zinc and H<sub>2</sub>",
                "Nickel and H<sub>2</sub>"
            ],
            "answer": "Nickel and H<sub>2</sub>"
        },
        {
            "question": "Which one of the following has the highest ionic character?",
            "options": [
                "BeF<sub>3</sub>",
                "SiO<sub>2</sub>",
                "NCl<sub>3</sub>",
                "K<sub>2</sub>S"
            ],
            "answer": "K<sub>2</sub>S"
        },
        {
            "question": "Which of the following statements regarding ice-cap climate is/are correct?<br/><br/>1. In the Koeppen climate classification, the ice-cap climate is signified by the letters EF.<br/>2. It is the Earth's most severe climate, where the mean monthly temperature is never above 0 degree Celsius.<br/>3. This climate is found in the Pir Panjal and the Great Himalayas.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which of the following statements regarding the Industrial Revolution is/are correct?<br/><br/>1. It was change of a society from a rural and agricultural lifestyle to one in which most people earned their living in the industrial or secondary sector of the economy.<br/>2. The first Industrial Revolution began in Germany in the early eighteenth century.<br/>3. During Industrial Revolution, technological advances in iron smelting, and later steel production, were accompanied by the invention of steam engine.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Which of the following statements regarding insolation is/are correct?<br/><br/>1. Insolation is predominantly short-wave radiation, with wavelengths in the range of 0&middot;39 micrometre to 0&middot;76 micrometre.<br/>2. Insolation is evenly distributed across the Earth because of the Earth's curved surface.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which of the following statements regarding river meanders is/are correct?<br/><br/>1. It is a U-shaped bend in a river.<br/>2. An extremely tight meander is called a gooseneck; it is likely to become a cutoff, or oxbow lake, after a flood.<br/>3. Tectonic uplift can cause a river to continue downcutting along its meandering course, producing incised or entrenched meanders.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "How can one determine the relative humidity on a particular day at a given place?",
            "options": [
                "If temperature is given",
                "If absolute humidity is given",
                "If both temperature and absolute humidity are given",
                "If percentage of absolute humidity is given"
            ],
            "answer": "If both temperature and absolute humidity are given"
        },
        {
            "question": "Which greenhouse gas has maximum average residence time in the atmosphere?",
            "options": [
                "CFC",
                "CH<sub>4</sub>",
                "N<sub>2</sub>O",
                "Water vapour"
            ],
            "answer": "CFC"
        },
        {
            "question": "What does BW stand for as per the Koeppen climate classification?",
            "options": [
                "Steppe climate",
                "Desert climate",
                "Tundra climate",
                "Mesothermal climate"
            ],
            "answer": "Desert climate"
        },
        {
            "question": "Which organisation publishes worldwide list of endangered species?",
            "options": [
                "The International Union for Conservation of Nature (IUCN)",
                "The World Wide Fund for Nature (WWF)",
                "The United Nations Environment Programme (UNEP)",
                "The United Nations Development Programme (UNDP)"
            ],
            "answer": "The International Union for Conservation of Nature (IUCN)"
        },
        {
            "question": "On which among the following is National Waterway No. 2 situated?",
            "options": [
                "The Ganga, Haldia-Prayagraj",
                "West Coast Canal, Kottapuram-Kollam",
                "The Brahmaputra, Sadiya-Dhubri",
                "Godavari and Krishna, Kakinada-Puducherry"
            ],
            "answer": "The Brahmaputra, Sadiya-Dhubri"
        },
        {
            "question": "What is culturable wasteland?",
            "options": [
                "Land that has been left fallow in last four years",
                "Land that has been left fallow between one and two years",
                "Land that has been left fallow for less than one year",
                "Land that has been left fallow for more than five years"
            ],
            "answer": "Land that has been left fallow for more than five years"
        },
        {
            "question": "Which of the following statements is/are correct?<br/><br/>1. Angular velocity for all locations on the Earth's surface is the same while linear velocity varies.<br/>2. Linear velocity is maximum at the equator and minimum at the poles.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following statements about Rana Kumbha of Mewar :<br/><br/>1. He wrote a commentary on Jayadeva's <i>Gitagovinda</i>.<br/>2. He wrote four dramas in which he is said to have made use of four provincial languages.<br/>3. He erected Kirtistambha in Chitor in commemoration of his victory over Gujarat.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1, 2 and 3",
                "2 and 3 only",
                "1 and 2 only",
                "3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Who among the following Chola kings encouraged the Sailendra ruler of Sri Vijaya to build a Buddhist Vihara in Negapatnam?",
            "options": [
                "Parantaka I",
                "Rajaraja I",
                "Rajendra I",
                "Kulottunga I"
            ],
            "answer": "Rajaraja I"
        },
        {
            "question": "Who among the following was <i>not</i> a court poet of king Krishnadevaraya?",
            "options": [
                "Timmana",
                "Dhurjati",
                "Mallana",
                "Siddheshvara"
            ],
            "answer": "Siddheshvara"
        },
        {
            "question": "The royal portraits of Simhavishnu and Mahendravarman are found in which cave temple at Mamallapuram?",
            "options": [
                "Varaha Cave",
                "Ramanuja Cave",
                "Adivaraha Cave",
                "Trimurti Cave"
            ],
            "answer": "Adivaraha Cave"
        },
        {
            "question": "How many of the following statements about Bhakti poet Namdev is/are correct?<br/><br/>1. He seems to have played a part in transmitting the southern Bhakti to northern India.<br/>2. He was a rigorous monotheist and opposed caste distinctions.<br/>3. He was a devout follower of Kabir.<br/><br/>Select the correct answer.",
            "options": [
                "1",
                "2",
                "3",
                "None"
            ],
            "answer": "2"
        },
        {
            "question": "How many of the following statements regarding medicine and related practices in medieval India is/are correct?<br/><br/>1. Indian medicine of the Graeco-Arabic tradition (Tibb-i-Yunani) was almost identical in its practice with contemporary Persian medicine.<br/>2. Harvey's discovery of the circulation of blood was explained to a scholarly noble by European traveller Francois Bernier.<br/>3. The practice of smallpox inoculation was described in contemporary Yunani and Ayurvedic texts.<br/><br/>Select the correct answer.",
            "options": [
                "1",
                "2",
                "3",
                "None"
            ],
            "answer": "3"
        },
        {
            "question": "Which of the following statements about Virashaivism is/are correct?<br/><br/>1. The Virashaivism traces its origin to the five great religious teachers&mdash;Renuka, Daruka, Ghantakarna, Dhenukarna and Vishvakarna.<br/>2. The Virashaiva philosophy is called Shaktivishishtadvaita&mdash;the non-duality of God.<br/>3. Ashtavarana are the eight rules of the Virashaivism to be observed by the followers.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "1, 2 and 3",
                "1 and 3 only",
                "3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Who propounded Kashmir Shaivism?",
            "options": [
                "Vasugupta",
                "Abhinavagupta",
                "Ramakantha",
                "Ranganathacharya"
            ],
            "answer": "Vasugupta"
        },
        {
            "question": "Which one among the following is <i>not</i> under the jurisdiction of the Protection of Human Rights Act, 1993?",
            "options": [
                "The National Human Rights Commission",
                "The State Human Rights Commission",
                "The Human Rights Courts",
                "The Human Rights Council"
            ],
            "answer": "The Human Rights Council"
        },
        {
            "question": "According to B. R. Ambedkar, which one among the following Articles is the 'heart and soul' of the Constitution of India?",
            "options": [
                "Article 15",
                "Article 21",
                "Article 23",
                "Article 32"
            ],
            "answer": "Article 32"
        },
        {
            "question": "Who among the following filed the Writ Petition that led to the famous verdict of the Supreme Court of India recognising the Right to Privacy as a Fundamental Right?",
            "options": [
                "Justice P. N. Bhagwati",
                "Justice Rohinton Fali Nariman",
                "Justice K. S. Puttaswamy",
                "Justice Anil R. Dave"
            ],
            "answer": "Justice K. S. Puttaswamy"
        },
        {
            "question": "Through the Forty Second Amendment to the Constitution of India, which of the following was/were inserted into its Preamble?<br/><br/>1. 'Liberty of thought, expression and belief' was substituted by 'Liberty of thought, expression, belief, faith and worship'.<br/>2. The expression 'Unity of the Nation' was substituted by 'Unity and Integrity of the Nation'.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "As per the State List under the Seventh Schedule of the Constitution of India, the States have jurisdiction over agricultural land in connection with which of the following subjects?<br/><br/>1. Taxes on agricultural income<br/>2. Duties in respect of succession of agricultural land<br/>3. Estate duty in respect of agricultural land<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "The 7th edition of the Indian Ocean Conference was held at",
            "options": [
                "Dhaka",
                "New Delhi",
                "Mal&eacute;",
                "Perth"
            ],
            "answer": "Perth"
        },
        {
            "question": "Match List-I with List-II and select the correct answer using the code given below the Lists :<br/><br/>List-I (Political idea)<br/>A. Human beings, unlike all other objects, possess dignity<br/>B. It is Swaraj when we learn to rule ourselves<br/>C. Freedom implies not only emancipation from political bondage but also equal distribution of wealth<br/>D. For me real freedom is freedom from fear<br/><br/>List-II (Thinker)<br/>1. Aung San Suu Kyi<br/>2. Subhas Chandra Bose<br/>3. Immanuel Kant<br/>4. Mahatma Gandhi",
            "options": [
                "A-3, B-2, C-4, D-1",
                "A-1, B-4, C-2, D-3",
                "A-3, B-4, C-2, D-1",
                "A-1, B-2, C-4, D-3"
            ],
            "answer": "A-3, B-4, C-2, D-1"
        },
        {
            "question": "Who among the following is the author of the book <i>Four Stars of Destiny : An Autobiography</i>?",
            "options": [
                "Sam Manekshaw",
                "K. J. S. Dhillon",
                "Bipin Rawat",
                "Manoj Mukund Naravane"
            ],
            "answer": "Manoj Mukund Naravane"
        },
        {
            "question": "The Indian Army launched 'Operation Sarvashakti' to flush out terrorists in",
            "options": [
                "Myanmar",
                "Manipur",
                "Jammu and Kashmir",
                "Chhattisgarh"
            ],
            "answer": "Jammu and Kashmir"
        },
        {
            "question": "Which of the following cities were conferred with the cleanest city award under Swachh Survekshan Awards, 2023?",
            "options": [
                "Varanasi and Prayagraj",
                "Indore and Surat",
                "Prayagraj and Indore",
                "Surat and Varanasi"
            ],
            "answer": "Indore and Surat"
        },
        {
            "question": "Which one of the following is an indigenous assault rifle developed by DRDO?",
            "options": [
                "Heckler",
                "T91",
                "Tikka",
                "Ugram"
            ],
            "answer": "Ugram"
        },
        {
            "question": "With which one among the following sports is Yogesh Singh, who won a Gold Medal in an Asian Championship in 2024, associated?",
            "options": [
                "Badminton",
                "Shooting",
                "Archery",
                "Wrestling"
            ],
            "answer": "Shooting"
        },
        {
            "question": "Renowned classical singer Prabha Atre, who passed away recently, was an exponent of which one of the following Gharanas?",
            "options": [
                "Kirana Gharana",
                "Patiala Gharana",
                "Gwalior Gharana",
                "Agra Gharana"
            ],
            "answer": "Kirana Gharana"
        },
        {
            "question": "Who among the following was the first Indian Commander-in-Chief of the Indian Army of independent India?",
            "options": [
                "S. M. Srinagesh",
                "K. M. Cariappa",
                "K. S. Thimayya",
                "K. S. Rajendrasinhji"
            ],
            "answer": "K. M. Cariappa"
        },
        {
            "question": "Which one of the following is an 'end-to-end secure mobile ecosystem' developed recently by the Indian Army?",
            "options": [
                "SANCHAR",
                "VAIBHAV",
                "SAMPARK",
                "SAMBHAV"
            ],
            "answer": "SAMBHAV"
        },
        {
            "question": "Consider the following statements about the Regional Comprehensive Economic Partnership (RCEP) :<br/><br/>1. It is a comprehensive free trade agreement between the ASEAN member States and ASEAN's free trade agreement partners.<br/>2. India opted out of RCEP.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Recently the Government of India entered into an agreement for a lithium exploration and mining project with which one among the following countries?",
            "options": [
                "Brazil",
                "Australia",
                "Argentina",
                "Chile"
            ],
            "answer": "Argentina"
        },
        {
            "question": "Consider the following statements about the Shanghai Cooperation Organisation (SCO) :<br/><br/>1. One of the goals of SCO is to promote a new democratic, fair and rational international political and economic order.<br/>2. Iran is a permanent member of SCO.<br/><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements about the ICC under-19 Men's Cricket World Cup, 2024 is/are correct?<br/><br/>1. Australia won this title for the 4th time.<br/>2. It was organised in South Africa.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements with regard to Bharat Ratna Award is/are correct?<br/><br/>1. It was instituted in the year 1972.<br/>2. The award does not carry any monetary grant.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which of the following statements about India's rank in the Global Innovation Index-2023, published by the World Intellectual Property Organisation, is/are correct?<br/><br/>1. India has been placed at 40th rank.<br/>2. India has been on a rising trajectory over the period 2015&ndash;2023.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements about 'Green Credit Initiative' is/are correct?<br/><br/>1. It is a response to the challenge of climate change.<br/>2. It promotes plantations on wasteland and river catchment areas.<br/>3. It is a scheme of the Government of India to replace the kerosene oil with solar power used by the rural poor.<br/><br/>Select the correct answer using the code given below.",
            "options": [
                "1, 2 and 3",
                "1 and 2 only",
                "2 only",
                "1 and 3 only"
            ],
            "answer": "1 and 2 only"
        }
    ],
    "2025-I": [
        {
            "question": "Consider the following statements with reference to Secondary waves (S-Waves) generated during an earthquake :<br/><br/>1. They create troughs and crests in the material through which they pass.<br/>2. The direction of vibrations of S-waves is perpendicular to the wave direction in the vertical plane.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Identify the Mineral on the basis of the following characteristics relating to it :<br/><br/>I. It is usually a greenish crystal.<br/>II. It is often found in basaltic rocks.<br/>III. Magnesium, iron and silica are its major elements.<br/><br/>Select the answer using the code given below :",
            "options": [
                "Amphibolite",
                "Feldspar",
                "Pyroxene",
                "Olivine"
            ],
            "answer": "Olivine"
        },
        {
            "question": "Which of the following statements with reference to Salt Weathering is/are correct ?<br/><br/>1. Salt crystallisation is the most effective of all the salt weathering processes.<br/>2. Salt crystal growth is more effective over sedimentary rocks as compared to igneous rocks.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements with reference to Surface inversion of temperature is/are correct ?<br/><br/>1. It causes instability in the lower layers of the atmosphere.<br/>2. This inversion commonly lasts for a few hours until the Sun comes up.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Identify the cloud on the basis of the following characteristics relating to it :<br/><br/>I. They look like cotton wool.<br/>II. They exist in patches and have flat base.<br/>III. They are generally formed at a height of 4 to 7 km.<br/><br/>Select the answer using the code given below :",
            "options": [
                "Cirrus",
                "Cumulus",
                "Nimbus",
                "Stratus"
            ],
            "answer": "Cumulus"
        },
        {
            "question": "Identify the type of climate on the basis of the following characteristics relating to it :<br/><br/>I. Temperature is high throughout the year.<br/>II. Rainfall is variable with a short wet season and a longer dry season.<br/>III. Climate of Sudan and Paraguay is an example of this climate type.<br/><br/>Select the answer using the code given below :",
            "options": [
                "Sub-tropical steppe climate",
                "Mid-latitude steppe",
                "Tropical monsoon climate",
                "Tropical wet and dry climate"
            ],
            "answer": "Tropical wet and dry climate"
        },
        {
            "question": "What is the correct sequence of the following salts in ascending order according to their presence in the sea water ?<br/><br/>1. Calcium Carbonate<br/>2. Calcium Sulphate<br/>3. Magnesium Chloride<br/><br/>Select the answer using the code given below :",
            "options": [
                "3, 1, 2",
                "1, 3, 2",
                "1, 2, 3",
                "2, 1, 3"
            ],
            "answer": "1, 2, 3"
        },
        {
            "question": "Which of the following statements with reference to Humus is/are correct ?<br/><br/>1. It is a dark coloured amorphous substance.<br/>2. Being colloidal in nature, it serves as a reservoir of nutrients.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one among the following Biosphere Reserves is spread over three states in India ?",
            "options": [
                "Dehang Debang",
                "Nilgiris",
                "Nokrek",
                "Seshachalam"
            ],
            "answer": "Nilgiris"
        },
        {
            "question": "River Danube does <i>not</i> flow through which one of the following capital cities in Europe ?",
            "options": [
                "Belgrade",
                "Budapest",
                "Prague",
                "Vienna"
            ],
            "answer": "Prague"
        },
        {
            "question": "Which of the following statements with reference to Easter Island, a UNESCO World Heritage Site, is/are correct ?<br/><br/>1. It is part of Polynesia group of islands.<br/>2. It is a territory of the South American nation Chile.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one among the following is home to the endangered mountain gorillas in Africa ?",
            "options": [
                "Mount Kenya",
                "Mount Kilimanjaro",
                "Ngorongoro Crater",
                "Virunga Mountains"
            ],
            "answer": "Virunga Mountains"
        },
        {
            "question": "Which of the following statements with reference to Jordan is/are correct ?<br/><br/>1. The country of Jordan was created through the British Mandate after World War I.<br/>2. It is a landlocked country.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which one among the following places is situated close to the Pearl River Estuary in Asia ?",
            "options": [
                "Bangkok",
                "Hong Kong",
                "Macau",
                "Singapore"
            ],
            "answer": "Hong Kong"
        },
        {
            "question": "Consider the following statements with regard to Australia :<br/><br/>1. The Coral Sea separates the Great Barrier Reef from the South Pacific.<br/>2. The Great Dividing Range extends from Melbourne to Perth in Australia.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "What is the correct sequence of the following mountain ranges as one moves from North towards South ?<br/><br/>1. Karakoram<br/>2. Kunlun<br/>3. Ladakh<br/>4. Zaskar<br/><br/>Select the answer using the code given below :",
            "options": [
                "1, 2, 3, 4",
                "1, 2, 4, 3",
                "2, 1, 4, 3",
                "2, 1, 3, 4"
            ],
            "answer": "2, 1, 3, 4"
        },
        {
            "question": "Which of the following statements with reference to saline soil in India is/are correct ?<br/><br/>1. They are rich in nitrogen.<br/>2. They occur in arid and semi-arid regions, and in waterlogged and swampy areas.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Salal Power Project is situated on which one among the following rivers ?",
            "options": [
                "Chenab",
                "Jhelum",
                "Nubra",
                "Shyok"
            ],
            "answer": "Chenab"
        },
        {
            "question": "Which one among the following tributaries of Indus River does <i>not</i> originate in the Himalayas ?",
            "options": [
                "Gilgit",
                "Gomal",
                "Hunza",
                "Zaskar"
            ],
            "answer": "Gomal"
        },
        {
            "question": "As per the Annual Report 2023 - 24 of the Ministry of Mines, Government of India, which of the following are the major bauxite producing states in India ?",
            "options": [
                "Odisha and Madhya Pradesh",
                "Odisha and Jharkhand",
                "Jharkhand and Madhya Pradesh",
                "Jharkhand and Karnataka"
            ],
            "answer": "Odisha and Jharkhand"
        },
        {
            "question": "If your image appears to be erect, no matter how far you stand from a mirror, the mirror is likely to be :",
            "options": [
                "Plane",
                "Concave",
                "Convex",
                "Either plane or convex"
            ],
            "answer": "Either plane or convex"
        },
        {
            "question": "The rule that determines the direction of a magnetic field produced around a straight conductor carrying current is :",
            "options": [
                "Right-hand thumb rule",
                "Fleming's left-hand rule",
                "Fleming's right-hand rule",
                "Hund's rule"
            ],
            "answer": "Right-hand thumb rule"
        },
        {
            "question": "A motorcycle has initial velocity of 5 m/s. After 3 seconds, the velocity is 7 m/s. The displacement of the motorcycle in 3 seconds is :",
            "options": [
                "21 m",
                "18 m",
                "36 m",
                "6 m"
            ],
            "answer": "18 m"
        },
        {
            "question": "The minimum power required to lift a mass of 50 kg up to a vertical distance of 8 m in 10 s is : (Take g = 10 m/s<sup>2</sup>)",
            "options": [
                "400 W",
                "40 W",
                "50 W",
                "500 W"
            ],
            "answer": "400 W"
        },
        {
            "question": "Which one among the following statements is <i>not</i> correct ?",
            "options": [
                "All bodies in the universe attract each other due to the gravitational force.",
                "Newton's law of gravitation follows from Newton's laws of motion.",
                "The value of g (acceleration due to gravity) at the centre of the Earth is zero.",
                "Mass and weight are measured in different units."
            ],
            "answer": "Newton's law of gravitation follows from Newton's laws of motion."
        },
        {
            "question": "A body floats in a liquid if the buoyant force is :",
            "options": [
                "equal to its weight.",
                "less than its weight.",
                "greater than its weight.",
                "zero."
            ],
            "answer": "equal to its weight."
        },
        {
            "question": "A metallic sphere of mass 1 kg and volume 2 × 10<sup>-4</sup> m<sup>3</sup> is completely immersed in water.<br/>The buoyant force exerted by water on the sphere is :<br/>(Given : density of water = 1000 kg/m<sup>3</sup>, g = 10 m/s<sup>2</sup>)",
            "options": [
                "0·5 N",
                "1·5 N",
                "2 N",
                "2·5 N"
            ],
            "answer": "2 N"
        },
        {
            "question": "A light bulb rated as 60 W at 220 V has a potential difference of 110 V across its ends.<br/>The power dissipated in this light bulb is :",
            "options": [
                "30 W",
                "45 W",
                "15 W",
                "2 W"
            ],
            "answer": "15 W"
        },
        {
            "question": "Which one among the following is used in a simple microscope ?",
            "options": [
                "Diverging lens",
                "Concave mirror",
                "Converging lens",
                "Plane mirror"
            ],
            "answer": "Converging lens"
        },
        {
            "question": "The force with which the Earth attracts an object is called :",
            "options": [
                "Weight of the object",
                "Mass of the object",
                "Density of the object",
                "Magnitude of the object"
            ],
            "answer": "Weight of the object"
        },
        {
            "question": "Which of the following is one of the 'three gems' (<i>triratna</i>) of Jainism ?",
            "options": [
                "Brahmacharya",
                "Samyag-darshana",
                "Sunrita",
                "Asteya"
            ],
            "answer": "Samyag-darshana"
        },
        {
            "question": "Which one among the following motifs does <i>not</i> appear on Harappan seals ?",
            "options": [
                "Humped Bull",
                "Elephant",
                "Lion",
                "Crocodile"
            ],
            "answer": "Lion"
        },
        {
            "question": "Which one among the following is the earliest text ?",
            "options": [
                "Natyashastra of Bharata",
                "Sushruta Samhita",
                "Ashtadhyayi",
                "Manusmriti"
            ],
            "answer": "Ashtadhyayi"
        },
        {
            "question": "Which one of the following statements about Ashoka's inscriptions is correct ?",
            "options": [
                "The Major Rock Edict found in Kerala is in Sanskrit.",
                "Minor Rock Edicts in Bihar are found only in Pataliputra.",
                "The Dhauli Major Rock Edict makes a mention of the Kalinga War.",
                "Kalsi in Uttarakhand is a site of Major Rock Edicts."
            ],
            "answer": "Kalsi in Uttarakhand is a site of Major Rock Edicts."
        },
        {
            "question": "Which one of the following statements about the Ajivikas is <i>not</i> correct ?",
            "options": [
                "They did not practise discrimination on the basis of caste or class.",
                "They had a corporate organisation and canonical texts.",
                "They practised severe asceticism, often eating very little food.",
                "They formed an alliance with Jainas against Buddhists."
            ],
            "answer": "They formed an alliance with Jainas against Buddhists."
        },
        {
            "question": "Consider the following statements about the use of stirrup in India :<br/><br/>1. The Konarak horse sculpture (c. 1250) shows a ring-stirrup.<br/>2. A broad, probably wooden, stirrup appears in Khajuraho sculptures (probably 10<sup>th</sup> century).<br/>3. The iron-stirrup was used in the Delhi Sultans' armies from the thirteenth century onwards.<br/><br/>How many of the above statements is/are correct ?",
            "options": [
                "1",
                "2",
                "3",
                "Nil"
            ],
            "answer": "3"
        },
        {
            "question": "In the Rig Veda Samhita, use of the terms <i>ishukrit</i> and <i>isukara</i> referred to the maker of :",
            "options": [
                "Arrows",
                "Swords",
                "Vajra (Thunderbolt)",
                "Maces"
            ],
            "answer": "Arrows"
        },
        {
            "question": "Which one of the following does <i>not</i> refer to the bow (and arrow) as a weapon of war in ancient India ?",
            "options": [
                "Sharnga",
                "Kunta",
                "Kodanda",
                "Karmuka"
            ],
            "answer": "Kunta"
        },
        {
            "question": "What is the military-device referred to by the term <i>manjaniq</i> ?",
            "options": [
                "A device for loading field-guns with gunpowder",
                "Preparing cavalry for rapid charge",
                "A bolting device for strengthening the gates of forts",
                "A device for throwing stones (mangonel)"
            ],
            "answer": "A device for throwing stones (mangonel)"
        },
        {
            "question": "In medieval India, the process of indigo extraction underwent great improvement as a result of the :",
            "options": [
                "use of fertilizer enhancing the quality of indigo crop.",
                "introduction of mechanical crushing tools for indigo stems.",
                "use of gypsum and lime mortars in making the inner surfaces of indigo vats water-proof.",
                "employment of slave labour in quick desilting of indigo crucibles."
            ],
            "answer": "use of gypsum and lime mortars in making the inner surfaces of indigo vats water-proof."
        },
        {
            "question": "Which one of the following is listed in the <i>Ain-i Akbari</i> as one of the 'Indian sciences' prescribed by Akbar for scholars to learn at school ?",
            "options": [
                "Ayurveda",
                "Vyakarana",
                "Ganita",
                "Jyotisha"
            ],
            "answer": "Vyakarana"
        },
        {
            "question": "Consider the following statements about the arms used by Europeans in warfare in India :<br/><br/>1. The flint-lock muskets could work even in wet weather.<br/>2. The addition of bayonet made musket a more effective and dangerous weapon in close combat.<br/>3. The wrought-iron cannon barrels were easy to move and manoeuvre.<br/><br/>How many of the above statements is/are correct ?",
            "options": [
                "1",
                "2",
                "3",
                "Nil"
            ],
            "answer": "1"
        },
        {
            "question": "Which one of the following statements about the grammarian Katyayana is correct ?",
            "options": [
                "He was a contemporary of Panini.",
                "He was a contemporary of Patanjali.",
                "He belonged to a period between Panini and Patanjali.",
                "He belonged to a period later than both Panini and Patanjali."
            ],
            "answer": "He belonged to a period between Panini and Patanjali."
        },
        {
            "question": "Which one of the following statements about Rig Vedic goddesses is correct ?",
            "options": [
                "Ushas represents freedom from sickness.",
                "Sinivali bestows children.",
                "Aditi is goddess of dawn.",
                "Raka is goddess of speech."
            ],
            "answer": "Sinivali bestows children."
        },
        {
            "question": "Which one of the following statements about the Buddhist Goddess Hariti is correct ?",
            "options": [
                "She was converted by the Buddha from a blood-thirsty <i>yakshi</i> to a benevolent maternal figure.",
                "She is the feminine personification of wisdom.",
                "She protects people from eight great fears.",
                "She is a warrior goddess associated with the dawn."
            ],
            "answer": "She was converted by the Buddha from a blood-thirsty <i>yakshi</i> to a benevolent maternal figure."
        },
        {
            "question": "Consider the following statements about the literary language Apabhramsha :<br/><br/>1. It appeared in recognizable forms by the sixth century.<br/>2. It developed out of mixtures of regional vernaculars with the Prakrits and Sanskrit.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Who composed <i>Zainavilas</i>, a history of the rulers of Kashmir, in the time of Zainul Abidin ?",
            "options": [
                "Bhattavatara",
                "Jonaraja",
                "Shrivara",
                "Vachaspati"
            ],
            "answer": "Bhattavatara"
        },
        {
            "question": "In which one of the following works has Amir Khusrau praised the climate of India, its languages, notably Sanskrit, its arts and music and even its animals ?",
            "options": [
                "<i>Ijaz-i Khusrawi</i>",
                "<i>Dewal Rani Khizr Khani</i>",
                "<i>Khazainul Futuh</i>",
                "<i>Nuh Sipihr</i>"
            ],
            "answer": "<i>Nuh Sipihr</i>"
        },
        {
            "question": "Which one of the following works was written in early eighteenth century by the Bengali poet Rameshwar Bhattacharya ?",
            "options": [
                "<i>Dharmamangal</i>",
                "<i>Shivsankirttan</i>",
                "<i>Mansimha</i>",
                "<i>Vidyasundar</i>"
            ],
            "answer": "<i>Shivsankirttan</i>"
        },
        {
            "question": "Which one of the following present day territories was outside the limits of Ashoka's empire ?",
            "options": [
                "Brahmaputra valley, Assam",
                "Baluchistan",
                "North Bengal",
                "Kashmir valley"
            ],
            "answer": "Brahmaputra valley, Assam"
        },
        {
            "question": "Isobars of elements have same :",
            "options": [
                "Atomic numbers.",
                "Number of electrons.",
                "Mass numbers.",
                "Number of neutrons."
            ],
            "answer": "Mass numbers."
        },
        {
            "question": "Which one of the following could <i>not</i> be explained by Rutherford's nuclear model ?",
            "options": [
                "Stability of the atom",
                "Presence of nucleus in the centre of an atom",
                "Comparison of sizes of atom and nucleus",
                "Nucleus is positively charged"
            ],
            "answer": "Stability of the atom"
        },
        {
            "question": "If atomic number of an element is 11, the correct name, symbol and valency are :",
            "options": [
                "Lithium, Li, 1",
                "Magnesium, Mg, 2",
                "Boron, B, 3",
                "Sodium, Na, 1"
            ],
            "answer": "Sodium, Na, 1"
        },
        {
            "question": "Which one of the following gas is used in making soft drinks ?",
            "options": [
                "NH<sub>3</sub>",
                "PH<sub>3</sub>",
                "COCl<sub>2</sub>",
                "CO<sub>2</sub>"
            ],
            "answer": "CO<sub>2</sub>"
        },
        {
            "question": "Which one of the following is considered as a compound ?",
            "options": [
                "Silicon",
                "Tin",
                "Sugar solution",
                "Calcium carbonate"
            ],
            "answer": "Calcium carbonate"
        },
        {
            "question": "Rutherford's &alpha;-particle scattering experiment on gold foil is responsible for the discovery of :",
            "options": [
                "Neutron",
                "Electron",
                "Proton",
                "Atomic nucleus"
            ],
            "answer": "Atomic nucleus"
        },
        {
            "question": "Which one of the following is a metalloid ?",
            "options": [
                "Germanium",
                "Coke",
                "Iodine",
                "Sugar"
            ],
            "answer": "Germanium"
        },
        {
            "question": "Which one of the following is <i>not</i> explained by the Dalton's atomic theory ?",
            "options": [
                "Law of conservation of mass",
                "Law of constant composition",
                "Presence of different kind of sub-atomic particles in an atom",
                "Law of multiple proportion"
            ],
            "answer": "Presence of different kind of sub-atomic particles in an atom"
        },
        {
            "question": "Which one of the following contains all Lewis acids ?",
            "options": [
                "AlCl<sub>3</sub>, Co<sup>3+</sup>, BF<sub>3</sub>",
                "BCl<sub>3</sub>, NH<sub>3</sub>, OH<sup>-</sup>",
                "Mg<sup>2+</sup>, H<sub>2</sub>O, F<sup>-</sup>",
                "BF<sub>3</sub>, NH<sub>3</sub>, H<sub>2</sub>O"
            ],
            "answer": "AlCl<sub>3</sub>, Co<sup>3+</sup>, BF<sub>3</sub>"
        },
        {
            "question": "Number of electrons present in the species H<sub>2</sub><sup>+</sup>, He, H<sub>2</sub> and O<sub>2</sub><sup>+</sup> respectively are :",
            "options": [
                "1, 2, 2, 15",
                "1, 2, 1, 14",
                "2, 2, 2, 16",
                "0, 2, 1, 14"
            ],
            "answer": "1, 2, 2, 15"
        },
        {
            "question": "Consider the following statements with respect to performance of the merchandise export of India in FY - 2024 :<br/><br/>1. Share of capital goods such as machinery, equipment and other durable goods decreased substantially.<br/>2. Share of consumer goods and intermediate goods increased.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which one among the following statements about Project Nexus is correct ?",
            "options": [
                "It is an international agreement to enable labour movement between countries.",
                "It is an international initiative to enable instant cross-border retail payments.",
                "It is an international initiative to transfer technology between countries.",
                "It is an international agreement to create database on financial inclusion."
            ],
            "answer": "It is an international initiative to enable instant cross-border retail payments."
        },
        {
            "question": "While calculating the consumer price index, 'housing' as an item is classified as :",
            "options": [
                "Core consumer durable",
                "Core consumer non-durable",
                "Core capital goods",
                "Core service"
            ],
            "answer": "Core service"
        },
        {
            "question": "Which one among the following established the first Global Capability Centre in India ?",
            "options": [
                "Honeywell",
                "Citibank",
                "Texas Instruments",
                "SAP Labs India"
            ],
            "answer": "Texas Instruments"
        },
        {
            "question": "Which of the following pairs is/are <i>not</i> correctly matched ?<br/><br/>1. Global Value Chains (GVC) : International Product Sharing<br/>2. World Integrated Trade Solutions : Database on GVC related Trade<br/>3. Current Account Deficit (CAD) : Foreign Direct Investment<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "3 only",
                "1, 2 and 3"
            ],
            "answer": "3 only"
        },
        {
            "question": "How can currency depreciation stimulate an increase in net exports ?<br/><br/>1. By reducing export costs<br/>2. By reducing import prices<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Core inflation is :",
            "options": [
                "CPI headline inflation minus all non-food items",
                "WPI inflation minus all food and non-food items",
                "CPI headline inflation minus food and energy items",
                "WPI inflation minus food and energy items"
            ],
            "answer": "CPI headline inflation minus food and energy items"
        },
        {
            "question": "In alignment with the guidelines of NEP 2020, 'Poshan bhi Padhai bhi' (PBPB) was launched under which one among the following programmes ?",
            "options": [
                "Integrated Teacher Training Programme",
                "Vidya Pravesh",
                "Early Childhood Care and Education",
                "Samagra Shiksha Abhiyan"
            ],
            "answer": "Early Childhood Care and Education"
        },
        {
            "question": "Which one among the following defines flexi workers in India ?",
            "options": [
                "Formal contract staff employed through organised contract",
                "Informal sector employees working in urban areas",
                "Agricultural labour migrating to urban areas",
                "Regular salaried workers working in registered companies"
            ],
            "answer": "Formal contract staff employed through organised contract"
        },
        {
            "question": "Which one among the following is an integrated teacher training programme ?",
            "options": [
                "Vidya Pravesh",
                "NISHTHA",
                "Vidyanjali",
                "DIKSHA"
            ],
            "answer": "NISHTHA"
        },
        {
            "question": "Which instrument is used to measure the blood pressure manually ?",
            "options": [
                "Sphygmomanometer",
                "Centrifuge",
                "Electrophoresis",
                "Thermal cycler"
            ],
            "answer": "Sphygmomanometer"
        },
        {
            "question": "Myopia is also known as :",
            "options": [
                "Far-sightedness",
                "Near-sightedness",
                "Cataract",
                "Presbyopia"
            ],
            "answer": "Near-sightedness"
        },
        {
            "question": "Why does the Rough Endoplasmic Reticulum look 'rough' under a microscope ?",
            "options": [
                "Due to the presence of ribosomes on its surface",
                "Due to the absence of ribosomes on its surface",
                "Due to the presence of lysosomes on its surface",
                "Due to the presence of mitochondria on its surface"
            ],
            "answer": "Due to the presence of ribosomes on its surface"
        },
        {
            "question": "Which one among the following is <i>not</i> a plant hormone ?",
            "options": [
                "Gibberellins",
                "Abscisic acid",
                "Auxins",
                "Thyroxine"
            ],
            "answer": "Thyroxine"
        },
        {
            "question": "The normal systolic pressure in human beings is :",
            "options": [
                "80 mm of Hg",
                "100 mm of Hg",
                "120 mm of Hg",
                "140 mm of Hg"
            ],
            "answer": "120 mm of Hg"
        },
        {
            "question": "Sponges belong to which one among the following phylum ?",
            "options": [
                "Porifera",
                "Platyhelminthes",
                "Cnidaria",
                "Annelida"
            ],
            "answer": "Porifera"
        },
        {
            "question": "Lactose is made up of :",
            "options": [
                "Glucose only",
                "Glucose and Fructose",
                "Glucose and Sucrose",
                "Glucose and Galactose"
            ],
            "answer": "Glucose and Galactose"
        },
        {
            "question": "The enzymes which catalyze the same reaction but have different amino acid compositions are commonly referred as :",
            "options": [
                "Isoenzymes",
                "Isotopes",
                "Isomers",
                "Coenzymes"
            ],
            "answer": "Isoenzymes"
        },
        {
            "question": "How many Carbon atoms are present in a Pyruvate molecule ?",
            "options": [
                "2",
                "3",
                "4",
                "5"
            ],
            "answer": "3"
        },
        {
            "question": "The human eye has a point that lacks photoreceptor cells. This is identified as :",
            "options": [
                "Fovea",
                "Blind spot",
                "Dark spot",
                "Orbit"
            ],
            "answer": "Blind spot"
        },
        {
            "question": "Which of the following Constitution Amendment Acts introduced GST (Goods and Services Tax) in course of inter-state trade or commerce ?",
            "options": [
                "Constitution (One Hundred and First Amendment) Act",
                "Constitution (One Hundred and Second Amendment) Act",
                "Constitution (One Hundred and Fourth Amendment) Act",
                "Constitution (One Hundred and Sixth Amendment) Act"
            ],
            "answer": "Constitution (One Hundred and First Amendment) Act"
        },
        {
            "question": "Which one among the following UN agencies has received the Nobel Prize more than once ?",
            "options": [
                "ILO",
                "WFP",
                "UNICEF",
                "UNHCR"
            ],
            "answer": "UNHCR"
        },
        {
            "question": "Consider the following statements about Central Vigilance Commission (CVC) :<br/><br/>1. Central Vigilance Commissioner is appointed by the President of India.<br/>2. The Committee to recommend the appointment of Central Vigilance Commissioner has the Minister of Home Affairs as one of the members.<br/>3. In certain circumstances the Leader of the single largest group in opposition in Lok Sabha can be on the Committee to recommend the appointment of Central Vigilance Commissioner.<br/><br/>How many of the above statements is/are correct ?",
            "options": [
                "Nil",
                "1",
                "2",
                "3"
            ],
            "answer": "3"
        },
        {
            "question": "International Day of Democracy, as decided vide a UN General Assembly resolution, is observed on :",
            "options": [
                "20 January",
                "1 July",
                "15 September",
                "9 December"
            ],
            "answer": "15 September"
        },
        {
            "question": "Which of the following statements about the NITI Aayog is/are correct ?<br/><br/>1. Prime Minister of India is the Chairperson of its Governing Council.<br/>2. Lieutenant Governor of Ladakh is a member of its Governing Council.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements about National Commission for Women are correct ?<br/><br/>1. It is a statutory body.<br/>2. It has the mandate to review the constitutional and legal safeguards for women.<br/>3. It has the mandate to advise the Government on all policy matters affecting women.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which, amongst the following, is the latest language to be included in the Eighth Schedule of the Constitution of India ?",
            "options": [
                "Maithili",
                "Nepali",
                "Konkani",
                "Manipuri"
            ],
            "answer": "Maithili"
        },
        {
            "question": "Which one among the following states has the highest number of seats in the Council of States ?",
            "options": [
                "Andhra Pradesh",
                "Bihar",
                "Madhya Pradesh",
                "Tamil Nadu"
            ],
            "answer": "Tamil Nadu"
        },
        {
            "question": "Which of the following statements about the Indus Waters Treaty is/are correct ?<br/><br/>1. The term 'Eastern Rivers' means the Sutlej, the Beas and the Ravi taken together.<br/>2. The term 'Western Rivers' means the Indus, the Jhelum and the Chenab taken together.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements is/are correct as per the Constitution of India ?<br/><br/>1. The Constitution (Eighty-sixth Amendment) Act has added the Right to Education to the chapter of Directive Principles of State Policy.<br/>2. Right to Work and Right to Education are both, Fundamental Rights and Directive Principles of State Policy.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Neither 1 nor 2"
        },
        {
            "question": "As defined in Article 12 of the Constitution of India, 'State' includes :<br/><br/>1. Parliament of India<br/>2. State Governments<br/>3. State Legislatures<br/>4. Local authorities in India<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 3 only",
                "1, 2 and 3 only",
                "1, 2, 3 and 4",
                "2 and 4 only"
            ],
            "answer": "1, 2, 3 and 4"
        },
        {
            "question": "Which of the following descriptions with regard to Parliamentary Privilege for Members of the Parliament of India is/are correct ?<br/><br/>1. The Speaker is empowered to refer <i>suo moto</i> any question of privilege for investigation<br/>2. A question of privilege is accorded priority over other items in the List of Business<br/>3. The privilege extends to freedom from preventive arrest or detention<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 and 3 only",
                "1 and 2 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which one among the following statements about an adjournment motion in the Parliament of India is <i>not</i> correct ?",
            "options": [
                "Its objective is to draw attention of the House to any recent matter of urgent public importance.",
                "Adjournment motion is an extraordinary procedure.",
                "This motion can be invoked on any matter of urgent importance that may even be within the jurisdiction of a State Government.",
                "The Chair has absolute discretion to refuse consent."
            ],
            "answer": "This motion can be invoked on any matter of urgent importance that may even be within the jurisdiction of a State Government."
        },
        {
            "question": "The Kyoto Protocol specifically relates to which one among the following issues ?",
            "options": [
                "Emission reduction",
                "Ozone layer depletion",
                "Chlorofluorocarbons",
                "Biodiversity management"
            ],
            "answer": "Emission reduction"
        },
        {
            "question": "Who among the following was responsible for demarcating the borders between India and Pakistan during the partition in 1947 ?",
            "options": [
                "Cyril Radcliffe",
                "Mortimer Durand",
                "Henry McMahon",
                "Arthur Belfour"
            ],
            "answer": "Cyril Radcliffe"
        },
        {
            "question": "Which one among the following statements about Dr. Muthulakshmi Reddy, a freedom fighter, is <i>not</i> correct ?",
            "options": [
                "She was the first girl student to be admitted into a men's college.",
                "She was the first woman legislator in British India.",
                "She was a medical professional.",
                "She was honoured with Bharat Ratna in 1956."
            ],
            "answer": "She was honoured with Bharat Ratna in 1956."
        },
        {
            "question": "\"Since wars begin in the minds of men, it is in the minds of men that the defences of peace must be constructed.\" This observation can be found in the Constitution of which one of the following Organs of the United Nations ?",
            "options": [
                "World Health Organisation",
                "United Nations Educational, Scientific and Cultural Organisation",
                "International Atomic Energy Agency",
                "United Nations Economic and Social Council"
            ],
            "answer": "United Nations Educational, Scientific and Cultural Organisation"
        },
        {
            "question": "Which one among the following countries does <i>not</i> share its territorial boundary with Ukraine ?",
            "options": [
                "Poland",
                "Romania",
                "Lithuania",
                "Belarus"
            ],
            "answer": "Lithuania"
        },
        {
            "question": "Which of the following statements is/are correct ?<br/><br/>1. First Law Commission recommended Indian Penal Code, 1860.<br/>2. Indian Penal Code, 1860 has been completely replaced by the Bharatiya Nyaya Sanhita, 2023.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following statements with regard to the setting up of the Backward Class Commission in India :<br/><br/>1. The First Backward Class Commission, set up by the Government of India, is popularly known as Kaka Kalelkar Commission.<br/>2. The Third Backward Class Commission, set up by the Government of India, is popularly known as Mandal Commission.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which one among the following is the purpose of firewall ?",
            "options": [
                "Preventing unauthorised access to computer via the internet",
                "Installation of software that can harm the computer",
                "Recording everything that is done on computer",
                "Running checks to prevent virus attacks"
            ],
            "answer": "Preventing unauthorised access to computer via the internet"
        },
        {
            "question": "Which one of the following is <i>not</i> an application software ?",
            "options": [
                "Spreadsheet",
                "AutoCAD",
                "MS PowerPoint",
                "Linker"
            ],
            "answer": "Linker"
        },
        {
            "question": "Which among the following is a malicious software ?",
            "options": [
                "Hacking",
                "Password Cracking",
                "Trojan Horse",
                "Firewall"
            ],
            "answer": "Trojan Horse"
        },
        {
            "question": "What is an interactive combination of text, graphics, video, audio and images termed as ?",
            "options": [
                "JPEG",
                "Multimedia",
                "AVA",
                "PNG"
            ],
            "answer": "Multimedia"
        },
        {
            "question": "Which one of the following is the characteristic of Artificial Intelligence ?",
            "options": [
                "Replicates human decision making",
                "Stores relevant information",
                "Stores similar kind of data for a specific purpose",
                "Allows user to interact with media"
            ],
            "answer": "Replicates human decision making"
        },
        {
            "question": "Which organisation/institute has recently started the new initiatives such as <i>Bharat Vidya Pariyojana</i>, <i>Brihattar Bharat</i> and <i>Nari Samvaad Prakalp</i> ?",
            "options": [
                "IGNOU",
                "Sahitya Akademi",
                "Centre for Cultural Resources and Training (CCRT)",
                "Indira Gandhi National Centre for Arts (IGNCA)"
            ],
            "answer": "Indira Gandhi National Centre for Arts (IGNCA)"
        },
        {
            "question": "Which one among the following educational institutions established under the Union Ministry of Culture is promoting to preserve, protect and promote Lord Buddha's teaching and value of love, compassion and non-violence for developing good moral values and practices ?",
            "options": [
                "Indian Institute of Advanced Study, Shimla",
                "National Council of Educational Research & Training, New Delhi",
                "Nava Nalanda Mahavihara, Nalanda",
                "IGNOU, New Delhi"
            ],
            "answer": "Nava Nalanda Mahavihara, Nalanda"
        },
        {
            "question": "\"Nirbhaya Fund\", a non-lapsable corpus fund, which is to be utilized for the projects specifically designed to improve the safety and security of women is administered by :",
            "options": [
                "The Ministry of Women & Child Development",
                "The Ministry of Home Affairs",
                "The Ministry of Finance",
                "The Ministry of Education"
            ],
            "answer": "The Ministry of Finance"
        },
        {
            "question": "The <i>Paramparagat Krishi Vikas Yojana</i> (PKVY) launched in 2015 - 16 by the Central Government is aimed to :",
            "options": [
                "make agriculture more modern and globally competitive.",
                "provide improved access to irrigation and enhanced water efficiency.",
                "support promotion of organic farming in the country.",
                "reduce dependence of agriculture on monsoon."
            ],
            "answer": "support promotion of organic farming in the country."
        },
        {
            "question": "When did the Union Government establish a separate 'Ministry of Cooperation' with the vision of \"<i>Sahkar Se Samriddhi</i>\" ?",
            "options": [
                "2014",
                "2016",
                "2018",
                "2021"
            ],
            "answer": "2021"
        },
        {
            "question": "The Ministry of Defence, Government of India, has declared 2025 as the year of :",
            "options": [
                "Rehabilitation of the families of martyrs",
                "Reforms",
                "Peace",
                "Self-reliance"
            ],
            "answer": "Rehabilitation of the families of martyrs"
        },
        {
            "question": "Which of the following statements about Open Network for Digital Commerce (ONDC) is/are correct ?<br/><br/>1. It was launched in 2021 by the Government of India.<br/>2. Its aim is to democratize e-commerce in India.<br/>3. India has surpassed China in 2024 in e-retail penetration.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1, 2 and 3",
                "1 and 2 only",
                "2 and 3 only",
                "3 only"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "\"Million Minds Augmenting National Aspirations and Knowledge\" (MANAK), a scheme under the flagship programme, Innovation in Science Pursuit for Inspired Research (INSPIRE), caters to :",
            "options": [
                "The college students studying in the undergraduate programme in the age group of 19 - 25 years.",
                "The research scholars in recognized research laboratories of national importance.",
                "The college teachers of the country.",
                "The school children studying in classes 6 - 10 in the age group of 10 - 15 years."
            ],
            "answer": "The school children studying in classes 6 - 10 in the age group of 10 - 15 years."
        },
        {
            "question": "Who among the following were awarded the Major Dhyan Chand Khel Ratna Award 2024 ?<br/><br/>1. Shri Gukesh D<br/>2. Shri Harmanpreet Singh<br/>3. Shri Praveen Kumar<br/>4. Ms. Manu Bhaker<br/><br/>Select the answer using the code given below :",
            "options": [
                "1, 2, 3 and 4",
                "1 and 4 only",
                "1, 2 and 4 only",
                "2 and 3 only"
            ],
            "answer": "1, 2 and 4 only"
        },
        {
            "question": "Consider the following statements about a prominent film personality of India :<br/><br/>He was born in Hyderabad. He emerged in the 1970s with a series of films that challenged mainstream Bollywood. He became widely known for <i>Bharat Ek Khoj</i>, a landmark 53-episode television series. He directed a 2023 biopic about Sheikh Mujibur Rahman.<br/><br/>Identify the personality from the following :",
            "options": [
                "Govind Nihalani",
                "Girish Karnad",
                "Shyam Benegal",
                "Mani Ratnam"
            ],
            "answer": "Shyam Benegal"
        },
        {
            "question": "'The Order of Mubarak Al-Kabeer' is the highest national award of :",
            "options": [
                "Egypt",
                "Kuwait",
                "Bahrain",
                "United Arab Emirates"
            ],
            "answer": "Kuwait"
        },
        {
            "question": "Bald eagle has recently been officially declared as the national bird of which one among the following countries ?",
            "options": [
                "China",
                "England",
                "USA",
                "Ireland"
            ],
            "answer": "USA"
        },
        {
            "question": "Surya Kiran is a joint military exercise between India and :",
            "options": [
                "Bangladesh",
                "Bhutan",
                "Singapore",
                "Nepal"
            ],
            "answer": "Nepal"
        },
        {
            "question": "Which of the following statements is/are correct ?<br/><br/>1. Moidam-The Mound-Burial system of the Ahom dynasty was inscribed in the UNESCO World Heritage list.<br/>2. The Government of India conferred the status of classical language to Pali, Assamese, Bengali and Maithili.<br/>3. Project PARI is an initiative of Ministry of Education.<br/><br/>Select the answer using the code given below :",
            "options": [
                "2 only",
                "1 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which one of the following PSLVs, launched by ISRO, is <i>not</i> correctly matched with their Missions ?<br/><br/><i>PSLV</i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Mission</i>",
            "options": [
                "PSLV C60 - SPADEX",
                "PSLV C59 - Proba-3",
                "PSLV C58 - XPoSat",
                "PSLV C57 - DS-SAR"
            ],
            "answer": "PSLV C57 - DS-SAR"
        }
    ],
    "2024-II": [
        {
            "question": "Which one among the following is <i>not</i> a micronutrient for plants ?",
            "options": [
                "Iron",
                "Manganese",
                "Magnesium",
                "Chlorine"
            ],
            "answer": "Magnesium"
        },
        {
            "question": "Xylem in the plants are responsible for the transport of :",
            "options": [
                "Water",
                "Water and dissolved minerals",
                "Gases",
                "Food"
            ],
            "answer": "Water and dissolved minerals"
        },
        {
            "question": "Which one among the following hormones inhibits the growth activity in plants ?",
            "options": [
                "Auxins",
                "Cytokinins",
                "Abscisic acid",
                "Gibberellins"
            ],
            "answer": "Abscisic acid"
        },
        {
            "question": "Which of the following category of biomolecules does Starch belong to ?",
            "options": [
                "Protein",
                "Carbohydrate",
                "Lipid",
                "Nucleic acid"
            ],
            "answer": "Carbohydrate"
        },
        {
            "question": "Which one among the following is <i>not</i> a feature of Xerophytes ?",
            "options": [
                "Smaller leaves",
                "Large number of stomata",
                "Waxy cuticle",
                "Stomata in pits"
            ],
            "answer": "Large number of stomata"
        },
        {
            "question": "Halophytes are the plants that grow on which one, among the following categories of soil ?",
            "options": [
                "Acidic soil",
                "Saline soil",
                "Black soil",
                "Sandy soil"
            ],
            "answer": "Saline soil"
        },
        {
            "question": "Which one among the following is <i>not</i> a part of vascular bundle in plants ?",
            "options": [
                "Phloem",
                "Xylem",
                "Cambium",
                "Endodermis"
            ],
            "answer": "Endodermis"
        },
        {
            "question": "In which one among the following mediums would the speed of sound be maximum ?",
            "options": [
                "Distilled water",
                "Sea water",
                "Drinking water",
                "Methanol"
            ],
            "answer": "Sea water"
        },
        {
            "question": "Which organelle in animal cells can digest foreign materials ?",
            "options": [
                "Endoplasmic reticulum",
                "Lysosome",
                "Golgi body",
                "Mitochondria"
            ],
            "answer": "Lysosome"
        },
        {
            "question": "Photosynthesis that converts light energy into chemical energy by the plants, involves the use of green pigments of leaves called chlorophyll. The only structure in a leaf that hosts chlorophyll is :",
            "options": [
                "Nucleus",
                "Ribosome",
                "Chloroplast",
                "Chromosome"
            ],
            "answer": "Chloroplast"
        },
        {
            "question": "In which of the following colloids is the dispersing medium a liquid ?",
            "options": [
                "Mist",
                "Foam",
                "Jelly",
                "Shaving cream"
            ],
            "answer": "Shaving cream"
        },
        {
            "question": "The two isotopes of elemental chlorine are :",
            "options": [
                "<sup>35</sup><sub>17</sub>C and <sup>36</sup><sub>17</sub>C",
                "<sup>34</sup><sub>17</sub>C and <sup>36</sup><sub>18</sub>C",
                "<sup>35</sup><sub>17</sub>C and <sup>37</sup><sub>18</sub>C",
                "<sup>35</sup><sub>17</sub>Cl and <sup>37</sup><sub>17</sub>Cl"
            ],
            "answer": "<sup>35</sup><sub>17</sub>Cl and <sup>37</sup><sub>17</sub>Cl"
        },
        {
            "question": "Which one among the following metals is <i>not</i> stored under oil ?",
            "options": [
                "Sodium",
                "Rubidium",
                "Potassium",
                "Lithium"
            ],
            "answer": "Lithium"
        },
        {
            "question": "Potassium nitrate is <i>not</i> used :",
            "options": [
                "as a fertilizer",
                "in medicine",
                "in making gunpowder",
                "as a preservative of meat products"
            ],
            "answer": "in medicine"
        },
        {
            "question": "The surface of the concrete structure of a new construction is covered with straw/gunny bags by wetting. This is done to :",
            "options": [
                "prevent fast evaporation, until hydration has proceeded well",
                "protect the concrete structure from contamination by dust particles",
                "prevent development of any fungus on the surface",
                "give smoother and cleaner surface over cement structure"
            ],
            "answer": "prevent fast evaporation, until hydration has proceeded well"
        },
        {
            "question": "Which one among the following statements for the gases mentioned below is <i>not</i> correct ?",
            "options": [
                "Hydrogen has 3 isotopes.",
                "Helium is a commonly used gas in electric bulbs.",
                "Oxygen is used to burn fuel in rocket engines in spacecraft.",
                "Nitrogen can be used in gaseous form to replace air in food packaging."
            ],
            "answer": "Helium is a commonly used gas in electric bulbs."
        },
        {
            "question": "Match List-I with List-II and select the correct answer using the code given below the Lists :<br/><br/>List-I (Trade Name)<br/>A. Bleaching powder<br/>B. Baking soda<br/>C. Washing soda<br/>D. Plaster of Paris<br/><br/>List-II (Chemical Name)<br/>1. Sodium bicarbonate<br/>2. Sodium carbonate, 10 water<br/>3. Calcium oxychloride<br/>4. Calcium sulphate, <sup>1</sup>/<sub>2</sub> water",
            "options": [
                "A-3, B-1, C-2, D-4",
                "A-3, B-2, C-1, D-4",
                "A-4, B-2, C-1, D-3",
                "A-4, B-1, C-2, D-3"
            ],
            "answer": "A-3, B-1, C-2, D-4"
        },
        {
            "question": "Which one among the following statements is <i>not</i> true for glass ?",
            "options": [
                "Sodium silicate is known as water glass.",
                "Glass is also called super cooled liquid.",
                "Crystallinity develops on cooling of the molten mass of the glass.",
                "Coloured glasses can be made by adding different colouring materials."
            ],
            "answer": "Crystallinity develops on cooling of the molten mass of the glass."
        },
        {
            "question": "Which one among the following is responsible for determining the chemical properties of an element ?",
            "options": [
                "Protons",
                "Electrons",
                "Neutrons",
                "Nucleus"
            ],
            "answer": "Electrons"
        },
        {
            "question": "Which one among the following is used in bleaching of paper ?",
            "options": [
                "Chlorine",
                "Chlorobenzene",
                "Ammonium chloride",
                "Hydrochloric acid"
            ],
            "answer": "Chlorine"
        },
        {
            "question": "X-rays can be used to :<br/><br/>1. inspect welded joints between two metal parts of a machine.<br/>2. study structure of crystals.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one of the following heat transfers is an example of convection ?",
            "options": [
                "Heating of food in a microwave oven",
                "Boiling water in a pot on a gas stove",
                "Feeling the warmth in sun",
                "Heating a brass rod at one end and observing the temperature rise at the other end"
            ],
            "answer": "Boiling water in a pot on a gas stove"
        },
        {
            "question": "The phenomenon of rainbow formation by water droplets involves :",
            "options": [
                "single refraction of sunlight",
                "one internal reflection of sunlight",
                "two internal reflections of sunlight",
                "both refraction and internal reflection of sunlight"
            ],
            "answer": "both refraction and internal reflection of sunlight"
        },
        {
            "question": "Ozone hole is a region over :",
            "options": [
                "the Antarctic caused mainly by CFC gases.",
                "the Antarctic caused mainly by carbon dioxide gas.",
                "the Arctic caused mainly by CFC gases.",
                "the Arctic caused mainly by carbon dioxide gas."
            ],
            "answer": "the Antarctic caused mainly by CFC gases."
        },
        {
            "question": "Which of the following are the major missions of Indian Space Research Organization in 2023 ?<br/><br/>1. Chandrayaan-3<br/>2. Solar Mission Aditya-L1<br/>3. Liquid fuel powered rockets<br/>4. Solar powered rockets<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "1, 2 and 3",
                "3 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which one of the following is the most appropriate reason for aircraft being equipped with conducting tyres ?",
            "options": [
                "They can transfer the charge accumulated on their surfaces during lightning",
                "They can transfer the charge accumulated on their surfaces being rubbed by air particles",
                "They can transfer the charge accumulated on their surfaces due to inflight operation of several gadgets",
                "For preventing sparks while they land on the ground"
            ],
            "answer": "They can transfer the charge accumulated on their surfaces being rubbed by air particles"
        },
        {
            "question": "Which of the following statements for persons suffering from presbyopia is/are correct ?<br/><br/>1. They cannot distinguish colours.<br/>2. It usually develops with ageing.<br/>3. They wear either bi-focal lenses consisting of both concave and convex lenses or progressive lenses.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "1 and 3",
                "2 and 3"
            ],
            "answer": "2 and 3"
        },
        {
            "question": "A sound wave having frequency of 300 Hz is travelling in an unknown medium. Its wavelength is not known. It travels a distance equal to 150 times its wavelength in time $t$. The value of $t$ is :",
            "options": [
                "0&middot;5 s",
                "1 s",
                "1&middot;5 s",
                "2 s"
            ],
            "answer": "0&middot;5 s"
        },
        {
            "question": "<i>Mission Shakti</i> (DRDO) of India is related to which one among the following ?",
            "options": [
                "Launch of multiple satellites using a single rocket",
                "Launch of heavy satellites",
                "Use of high power rockets in launching of satellites",
                "Use of rocket to destroy an orbiting satellite"
            ],
            "answer": "Use of rocket to destroy an orbiting satellite"
        },
        {
            "question": "In Sun-Earth system, the Sun, the Earth and the Lagrange point L4 form :",
            "options": [
                "an isosceles triangle",
                "an equilateral triangle",
                "a straight line",
                "a scalene triangle"
            ],
            "answer": "an equilateral triangle"
        },
        {
            "question": "Match List-I with List-II and select the correct answer using the code given below the Lists :<br/><br/>List-I (Training Institute)<br/>A. National Academy of Customs, Indirect Taxes and Narcotics<br/>B. LBS National Academy of Administration<br/>C. National Academy of Audit and Accounts<br/>D. All India Institute of Local Self Government<br/><br/>List-II (Location)<br/>1. Mussoorie<br/>2. Shimla<br/>3. Mumbai<br/>4. Palasamudram",
            "options": [
                "A-3, B-2, C-1, D-4",
                "A-3, B-1, C-2, D-4",
                "A-4, B-1, C-2, D-3",
                "A-4, B-2, C-1, D-3"
            ],
            "answer": "A-4, B-1, C-2, D-3"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. The Flag Code of India superseded the 'Flag Code-India'.<br/>2. The state emblem of India is an adaptation of the Lion Capital of Ashoka at Sarnath.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one of the following is <i>not</i> among the thematic areas of National Mission on Sustainable Habitat ?",
            "options": [
                "Energy and Green Building",
                "Mobility and Air Quality",
                "Waste Management",
                "Rural Planning, Green cover and Biodiversity"
            ],
            "answer": "Rural Planning, Green cover and Biodiversity"
        },
        {
            "question": "Which of the following are the components of the Indian Legal System ?<br/><br/>1. Basic values and principles enshrined in the Constitution<br/>2. Rights and obligations conferred by ordinary statutes<br/>3. Organizational set-up to enforce rights and obligations within the constitutional norms<br/>4. Legal and judicial persons<br/><br/>Select the answer using the code given below :",
            "options": [
                "1, 2, 3 and 4",
                "1, 2 and 4 only",
                "1, 2 and 3 only",
                "3 and 4 only"
            ],
            "answer": "1, 2, 3 and 4"
        },
        {
            "question": "Which one among the following statements about the objectives of Vibrant Village Programme is correct ?",
            "options": [
                "It is a Centrally sponsored scheme.",
                "This programme was launched in 2021.",
                "Arunachal Pradesh, Sikkim and Manipur are the states selected under this scheme.",
                "Villages of Uttar Pradesh along the Nepal border are selected as flagship villages under this scheme."
            ],
            "answer": "It is a Centrally sponsored scheme."
        },
        {
            "question": "Which one of the following UN organizations has <i>not</i> been awarded the Nobel Prize ?",
            "options": [
                "WFP",
                "ILO",
                "UNESCO",
                "UNHCR"
            ],
            "answer": "UNESCO"
        },
        {
            "question": "Which of the following areas has been exempted from the purview of the Citizenship (Amendment) Act, 2019 ?",
            "options": [
                "Ladakh",
                "Jammu and Kashmir",
                "The Sixth Schedule Areas",
                "The Fifth Schedule Areas"
            ],
            "answer": "The Sixth Schedule Areas"
        },
        {
            "question": "Who among the following stated that 'A just society is that society in which ascending sense of reverence and descending sense of contempt is dissolved into the creation of a compassionate society' ?",
            "options": [
                "Vinoba Bhave",
                "Bhimrao Ramji Ambedkar",
                "Rammanohar Lohia",
                "Jayaprakash Narayan"
            ],
            "answer": "Bhimrao Ramji Ambedkar"
        },
        {
            "question": "Which of the following statements is/are correct ?<br/><br/>1. Criminal law is exclusively a subject under the State List of the Constitution of India.<br/>2. Code of Civil Procedure falls under the Concurrent List of the Constitution of India.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Arrange the following agreements between India and Pakistan in chronological order :<br/><br/>1. Tashkent Declaration<br/>2. Indus Water Treaty<br/>3. Agreement on the Prohibition of Attack Against Each Other's Nuclear Installations and Facilities<br/>4. Agreement on Reducing the Risk from Accidents Relating to Nuclear Weapons<br/><br/>Select the answer using the code given below :",
            "options": [
                "1, 2, 3, 4",
                "2, 3, 1, 4",
                "2, 1, 3, 4",
                "1, 4, 2, 3"
            ],
            "answer": "2, 1, 3, 4"
        },
        {
            "question": "Which of the following statements with regard to the Shanghai Cooperation Organization (SCO) is/are correct ?<br/><br/>1. The official languages of the SCO are Russian and Chinese.<br/>2. The SCO enjoys observer status in the UN General Assembly.<br/>3. The SCO consists of 13 member states.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "1 and 3",
                "1 and 2",
                "2 and 3"
            ],
            "answer": "1 and 2"
        },
        {
            "question": "Financial Action Task Force is :",
            "options": [
                "A wing under the Central Economic Intelligence Bureau",
                "A division of Enforcement Directorate",
                "A global money laundering and terrorist financing watchdog",
                "A UN Anti-Corruption Agency"
            ],
            "answer": "A global money laundering and terrorist financing watchdog"
        },
        {
            "question": "In which of the following matters placed before the UN General Assembly, a resolution by two-thirds majority of the members present and voting is required ?<br/><br/>1. Admission of new members to the UN<br/>2. Election of the non-permanent members of the Security Council<br/>3. Election of members of the Economic and Social Council<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "'Bharat Parv' was organized by the Government of India during which of the following programmes ?<br/><br/>1. Republic Day 2024<br/>2. National Film Festival 2024<br/>3. Cannes Film Festival 2024<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Which one of the following organizations challenged the constitutionality of Section 377 of the Indian Penal Code in the Supreme Court of India ?",
            "options": [
                "Naz Foundation (India) Trust",
                "Bachpan Bachao Andolan",
                "Sambhav Foundation India",
                "ActionAid India"
            ],
            "answer": "Naz Foundation (India) Trust"
        },
        {
            "question": "As per Article 371G of the Constitution of India, special provisions have been made with respect to the state of Mizoram. Accordingly, no Act of Parliament shall apply on certain matters unless the Legislative Assembly of Mizoram so decides by a resolution. Which one of the following matters is <i>not</i> covered under this Article ?",
            "options": [
                "Religious or social practices of the Mizos",
                "Mizo customary law and procedure",
                "Administration of civil and criminal justice involving decisions according to Mizo customary law",
                "Ownership and transfer of natural resources"
            ],
            "answer": "Ownership and transfer of natural resources"
        },
        {
            "question": "Which of the following statements, as per the Information Technology Act, 2000, is/are correct ?<br/><br/>1. This Act provides that electronic signature is legally valid in the same manner as the handwritten signature.<br/>2. Both the Central Government and State Governments have been given the power to make rules with respect to electronic signature.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which of the following statements about National Recruitment Agency is correct ?",
            "options": [
                "It is a body to conduct Common Eligibility Test (CET) to shortlist the candidates for vacancies under 'Group B' and 'Group C' of the Government.",
                "Employment in private sector is facilitated in all the districts, particularly 117 aspirational districts.",
                "It was set up in 2014.",
                "It has been accorded Constitutional status in 2021."
            ],
            "answer": "It is a body to conduct Common Eligibility Test (CET) to shortlist the candidates for vacancies under 'Group B' and 'Group C' of the Government."
        },
        {
            "question": "The Research Design and Standards Organization is the R&D wing of which one of the following organizations ?",
            "options": [
                "Bhabha Atomic Research Centre",
                "Indian Space Research Organization",
                "Indian Railways",
                "Defence Research and Development Organization"
            ],
            "answer": "Indian Railways"
        },
        {
            "question": "Match List-I with List-II and select the correct answer using the code given below the Lists :<br/><br/>List-I (Speaker of Lok Sabha)<br/>A. Manohar Gajanan Joshi<br/>B. Somnath Chatterjee<br/>C. Meira Kumar<br/>D. Sumitra Mahajan<br/><br/>List-II (Tenure)<br/>1. 14<sup>th</sup> Lok Sabha<br/>2. 13<sup>th</sup> Lok Sabha<br/>3. 16<sup>th</sup> Lok Sabha<br/>4. 15<sup>th</sup> Lok Sabha",
            "options": [
                "A-2, B-1, C-4, D-3",
                "A-2, B-4, C-1, D-3",
                "A-3, B-4, C-1, D-2",
                "A-3, B-1, C-4, D-2"
            ],
            "answer": "A-2, B-1, C-4, D-3"
        },
        {
            "question": "Consider the following statements about the Vedanta philosophy :<br/><br/>1. Shankara was the founder of Advaita Vedanta.<br/>2. The philosophy of Dvaita was elaborated by Madhva.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "The distribution of <i>charkhas</i> on a wide scale among the people was decided by :",
            "options": [
                "Congress Working Committee in 1919",
                "All India Congress Committee in 1921",
                "Mahatma Gandhi at the start of Dandi March",
                "All India Congress Committee in 1947"
            ],
            "answer": "All India Congress Committee in 1921"
        },
        {
            "question": "The terms used for cereals in the Rig Veda are :",
            "options": [
                "<i>Godhuma</i> and <i>Vrihi</i>",
                "<i>Yava</i> and <i>Dhanya</i>",
                "<i>Tila</i> and <i>Khala</i>",
                "<i>Priyangu</i> and <i>Shyamaka</i>"
            ],
            "answer": "<i>Yava</i> and <i>Dhanya</i>"
        },
        {
            "question": "Consider the following statements about the condition of widows in the 18<sup>th</sup> century India :<br/><br/>1. Raja Sawai Jai Singh of Amber promoted widow remarriage.<br/>2. Maratha General Parshuram Bhau promoted widow remarriage.<br/>3. Raja Ram Mohan Roy opposed Sati.<br/><br/>Which of the statements given above are correct ?",
            "options": [
                "1 and 2 only",
                "1 and 3 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Consider the following statements about the administrative measures of Shivaji :<br/><br/>1. The scheme of <i>Ashta Pradhan</i> (eight ministers) was completed and announced at the time of Shivaji's coronation with regulations and duties properly defined.<br/>2. Shivaji introduced Marathi in place of Persian and coined Sanskrit technical terms for administrative purposes.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "With reference to the Mesolithic art in India, consider the following statements :<br/><br/>1. Alexander Burns discovered the first rock paintings in India at Sohagighat in Uttar Pradesh.<br/>2. Bhimbetka rock paintings were discovered when archaeologist V.S. Wakankar noticed the rocks out of a train window while travelling from Bhopal to Itarsi and got off at the nearest railway station to explore the site.<br/>3. The paintings and engravings do not exist in the same shelter in the rock art of Orissa.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "2 and 3",
                "1 and 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "In the decoration of Stupas, what does the term '<i>Kinjalkini</i>' refer to ?",
            "options": [
                "Creepers showing ornaments and textiles",
                "Scarves and saris",
                "Mango shaped pendants",
                "A garland of thousand lotus flowers"
            ],
            "answer": "A garland of thousand lotus flowers"
        },
        {
            "question": "Which of the following is/are the correct components of the \"Lion Capital\" at Sarnath ?<br/><br/>1. The shaft (stambha-yashti) or the tall tapering column<br/>2. An elliptical top part &ndash; the abacus, devoid of any carvings<br/>3. Overflowing inverted petals below the abacus<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "1 and 3 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Consider the following events leading to the Indian Independence :<br/><br/>1. Lucknow Pact<br/>2. Return of Subhash Chandra Bose to India<br/>3. Cripps Mission<br/>4. Naval Mutiny in Bombay<br/><br/>Select the chronological sequence of these events (earliest to latest) from the code given below :",
            "options": [
                "4, 3, 2, 1",
                "3, 4, 2, 1",
                "1, 2, 3, 4",
                "2, 1, 3, 4"
            ],
            "answer": "1, 2, 3, 4"
        },
        {
            "question": "Who among the following were famous for their metal-casting skills and used to cast excellent matchlocks during the medieval period ?",
            "options": [
                "Marathas",
                "Rajputs",
                "Ahoms",
                "Gonds"
            ],
            "answer": "Ahoms"
        },
        {
            "question": "Consider the following statements about the Ancient Hindu metal images in India :<br/><br/>1. The Chola period is well known for the aesthetic and technical finesse of its metal sculpture.<br/>2. The iconography and style of Chola metal images were similar to those of their stone counterparts.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one of the following terms was used for the States in the Draft Constitution presented by Dr. B.R. Ambedkar on 4<sup>th</sup> November, 1948 ?",
            "options": [
                "Union of States",
                "Federation of States",
                "Autonomous States",
                "Subsidiary States"
            ],
            "answer": "Union of States"
        },
        {
            "question": "The <i>antariya</i> was a garment worn by people during the Mauryan period. It was :",
            "options": [
                "an unstitched length of cloth draped around the body.",
                "a sewn garment consisting of a sleeved tunic.",
                "a head covering used exclusively by women.",
                "made of strips sewn together tied at the waist with a cord."
            ],
            "answer": "an unstitched length of cloth draped around the body."
        },
        {
            "question": "Consider the following statements with reference to the Utpala dynasty of Kashmir :<br/><br/>1. Avantivarman, the founder, devoted his energies to the economic upliftment of his subjects.<br/>2. Avantivarman's period in Kashmir is known for the engineering operations under his minister Suyya, resulting in the enormous increase of grains and fall in prices.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following pairs of High Offices and concerned Departments in the Mauryan Administration :<br/><br/>1. <i>Samahartri</i> : Chief Collector of Revenue<br/>2. <i>Dauvarika</i> : Chief of Army<br/>3. <i>Akshapatala</i> : Records-cum-Audit Officer<br/>4. <i>Samnidhatri</i> : Treasurer<br/><br/>Which of the pairs given above are correctly matched ?",
            "options": [
                "1 and 2 only",
                "1, 3 and 4 only",
                "3 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1, 3 and 4 only"
        },
        {
            "question": "Which kingdom was described by Governor-General Lord Dalhousie as \"<i>A cherry that will drop into our mouth one day</i>\" ?",
            "options": [
                "Delhi",
                "Awadh",
                "Jhansi",
                "Gwalior"
            ],
            "answer": "Awadh"
        },
        {
            "question": "Consider the following statements with reference to Census in India :<br/><br/>1. The first All India Census was attempted in 1872.<br/>2. From 1881, decennial censuses became a regular feature.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements is/are correct ?<br/><br/>1. During the Second Round Table Conference held in London in 1931, the British Government refused to accept the basic nationalist demand for freedom.<br/>2. India was granted dominion status in 1932.<br/>3. Viceroy Lord Willingdon adopted a policy of reconciliation with Congress.<br/>4. The Civil Disobedience Movement was started with the breaking of salt laws.<br/><br/>Select the answer using the code given below :",
            "options": [
                "2 and 3 only",
                "4 only",
                "1 and 4 only",
                "1, 2 and 4"
            ],
            "answer": "1 and 4 only"
        },
        {
            "question": "Which of the following statements about Cabinet Mission are correct ?<br/><br/>1. It was sent to India in 1946 to negotiate the transfer of power with the Indian leaders.<br/>2. It proposed a two-tiered federal plan while conceding the largest measure of regional autonomy.<br/>3. There was to be a federation of provinces and states, alongside a federal centre.<br/>4. The individual provinces were allowed to form regional unions to which they could surrender some of their powers by mutual agreement.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 3 only",
                "1, 2 and 4 only",
                "2, 3 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Consider the following pairs :<br/><br/>1. <i>Gajapati</i> &ndash; Name of a powerful Dynasty in Orissa<br/>2. <i>Ashvapati</i> &ndash; Deccan Sultans<br/>3. <i>Narapati</i> &ndash; Rayas of Vijayanagara<br/><br/>Which of the above pairs is/are correctly matched ?",
            "options": [
                "1 only",
                "2 only",
                "1, 2 and 3",
                "None of the above"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following pairs of Himalayan Glaciers and their location is/are correctly matched ?<br/><br/>1. Siachen &ndash; Nubra Valley Region<br/>2. Chungphar &ndash; Kumaon-Garhwal Region<br/>3. Zemu &ndash; Central Nepal Region<br/>4. Gasherbrum &ndash; Pir Panjal Range<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "1 and 2",
                "2 and 3",
                "3 and 4"
            ],
            "answer": "1 only"
        },
        {
            "question": "Consider the following statements regarding the rivers of India :<br/><br/>1. The Barak River, the head stream of the Meghna, rises in the hills of Meghalaya.<br/>2. The Ghaggar River does not drain out to the sea and gets lost in the Rajasthan desert.<br/>3. Puthimari and Manas are important tributaries of the Brahmaputra.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "1 and 2",
                "2 and 3"
            ],
            "answer": "2 and 3"
        },
        {
            "question": "Consider the following statements regarding transportation functions associated with important ports :<br/><br/>1. Singapore functions both as a port of call and an entrepot.<br/>2. Karwar in India is an example of a naval port.<br/>3. Dover in England is an example of an outport.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "3 only",
                "1 and 3",
                "1 and 2"
            ],
            "answer": "1 and 2"
        },
        {
            "question": "Cumulonimbus clouds develop from which among the following clouds ?",
            "options": [
                "Cumulus congestus clouds",
                "Cumulus and Nimbostratus clouds",
                "Cumulus and Altostratus clouds",
                "Cirrocumulus clouds"
            ],
            "answer": "Cumulus congestus clouds"
        },
        {
            "question": "Which of the following Ramsar Wetland sites is <i>not</i> situated in any of the Union Territories of India ?",
            "options": [
                "Hokera Wetland",
                "Point Calimere Wildlife and Bird Sanctuary",
                "Tsomoriri Lake",
                "Wular Lake"
            ],
            "answer": "Point Calimere Wildlife and Bird Sanctuary"
        },
        {
            "question": "Eratosthenes, a Greek philosopher measured the Earth's circumference based on the angle of Sun rays at two different points. Which cities were they ?",
            "options": [
                "Alexandria and Syene",
                "Syene and Troy",
                "Alexandria and Troy",
                "Alexandria and Thebes"
            ],
            "answer": "Alexandria and Syene"
        },
        {
            "question": "Which kind of mass wasting processes are commonly associated with creep ?",
            "options": [
                "Fast speed with soil",
                "Slow speed with rock",
                "Slow speed with ice",
                "Slow speed with soil"
            ],
            "answer": "Slow speed with soil"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. Hadley cells are key to understanding the wind patterns of Earth.<br/>2. Hadley cells are formed because the Equator is heated more strongly by the Sun than other places, creating thermal circulations.<br/><br/>With regard to the statements given above, which of the following is correct ?",
            "options": [
                "Both the statements are correct and statement 2 is the correct explanation of statement 1.",
                "Both the statements are correct, but statement 2 is <i>not</i> the correct explanation of statement 1.",
                "Statement 1 is correct, but statement 2 is false.",
                "Statement 1 is false, but statement 2 is correct."
            ],
            "answer": "Both the statements are correct and statement 2 is the correct explanation of statement 1."
        },
        {
            "question": "Consider the following statements :<br/><br/>1. Ocean currents are dominated by huge surface gyres that are driven by the global surface wind pattern.<br/>2. Equatorial currents move cold water westward and then poleward along the east coasts of continents.<br/><br/>With regard to the statements given above, which of the following is correct ?",
            "options": [
                "Both the statements are correct and statement 2 is the correct explanation of statement 1.",
                "Both the statements are correct, but statement 2 is <i>not</i> the correct explanation of statement 1.",
                "Statement 1 is correct, but statement 2 is false.",
                "Statement 1 is false, but statement 2 is correct."
            ],
            "answer": "Statement 1 is correct, but statement 2 is false."
        },
        {
            "question": "As per India State of Forest Report 2021, which one of the following states is <i>not</i> among the top three with reference to maximum area under forest ?",
            "options": [
                "Arunachal Pradesh",
                "Chhattisgarh",
                "Madhya Pradesh",
                "Maharashtra"
            ],
            "answer": "Maharashtra"
        },
        {
            "question": "How is strong pressure gradient represented on a weather map ?",
            "options": [
                "Closely spaced isobars",
                "Widely spaced isobars",
                "Closely spaced isobars at the periphery",
                "A set of two widely spaced isobars followed by two closely spaced isobars"
            ],
            "answer": "Closely spaced isobars"
        },
        {
            "question": "Which one of the following is <i>not</i> an example of chemical weathering ?",
            "options": [
                "Acid action",
                "Hydrolysis",
                "Salt Crystal Growth",
                "Oxidation"
            ],
            "answer": "Salt Crystal Growth"
        },
        {
            "question": "Which of the following statements regarding Arc Volcanoes is/are correct ?<br/><br/>1. Arc volcanoes are found near divergent plate boundaries.<br/>2. Some of the world's classical examples of cone-shaped stratovolcanoes, such as Mount Fuji in Japan, Mayon in the Philippines are Arc volcanoes.<br/>3. Some of the highest volcanoes on Earth are of the Arc type, notably Nevado Ojos del Salado in the Chilean Andes.<br/><br/>Select the answer using the code given below :",
            "options": [
                "2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Which one of the following statements regarding S-waves is <i>not</i> correct ?",
            "options": [
                "S-waves are slower than P-waves.",
                "During an earthquake S-waves are less destructive to structures like buildings and highway overpasses.",
                "S-waves can travel only through solids and cannot travel through the Earth's outer core.",
                "Seismologists have concluded that the Earth's outer core must be liquid or fluid."
            ],
            "answer": "During an earthquake S-waves are less destructive to structures like buildings and highway overpasses."
        },
        {
            "question": "Which of the following states is/are part of the Ganga Basin ?<br/><br/>1. Chhattisgarh<br/>2. Himachal Pradesh<br/>3. Rajasthan<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which peninsular river has a tributary named 'Kabini' ?",
            "options": [
                "Godavari",
                "Krishna",
                "Mahanadi",
                "Kaveri"
            ],
            "answer": "Kaveri"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. Bajra is predominantly grown in states like Rajasthan, Uttar Pradesh and Gujarat, while Ragi is mainly cultivated in Karnataka and Tamil Nadu.<br/>2. Bajra grows well in sandy and shallow black soils, whereas red and shallow black soil is suited for Ragi.<br/><br/>With regard to the statements given above, which of the following is correct ?",
            "options": [
                "Both the statements are correct and statement 2 is the correct explanation of statement 1.",
                "Both the statements are correct, but statement 2 is <i>not</i> the correct explanation of statement 1.",
                "Statement 1 is correct, but statement 2 is false.",
                "Statement 1 is false, but statement 2 is correct."
            ],
            "answer": "Both the statements are correct and statement 2 is the correct explanation of statement 1."
        },
        {
            "question": "Which of the following peaks are situated in India ?<br/><br/>1. Dhaulagiri<br/>2. Namcha Barwa<br/>3. Kamet<br/>4. Makalu<br/><br/>Select the answer using the code given below :",
            "options": [
                "1, 2 and 3",
                "1 and 3 only",
                "2 and 3 only",
                "2 and 4 only"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Which of the following statements regarding River Rhine is/are correct ?<br/><br/>1. Rhine River is an important pathway for industrial activity in northern Germany.<br/>2. Port of Rotterdam is located at the mouth of the Rhine River.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "With reference to the continent of 'Antarctica' which of the following statements are correct ?<br/><br/>1. It is larger than Europe in terms of area.<br/>2. It has the highest average elevation as compared to all other continents.<br/>3. Mt. Ross is the highest peak of this continent.<br/>4. Waters of the Southern Ocean (West Wind Drift) move in an anticlockwise direction around it.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "1 and 3 only",
                "1, 2 and 3",
                "2, 3 and 4"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. A rupee Vostro account is an account that an Indian bank holds for a foreign bank in the domestic currency (rupee) to enable domestic banks to provide international banking services.<br/>2. Insurance density, i.e., average insurance premium per capita does not fully capture the financing gap in the event of a premature death because most of the insurance products sold in India are savings-linked with a small component of protection.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following statements :<br/><br/>1. An additional spending by the Government of ₹ X is likely to have less impact on income than an additional transfer of ₹ X to households.<br/>2. An additional spending by the Government of ₹ X is likely to have less impact on income if it is not accompanied by an expansion in money supply.<br/><br/>Which of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Long-Term Low Emissions Development Strategy envisions :<br/><br/>1. a transition from fossil fuels in a just, smooth, sustainable manner.<br/>2. increased use of bio-fuels.<br/>3. climate resistant urban development.<br/>4. financing of sustainable development through Green Bonds.<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "1, 2 and 3",
                "2 and 4 only",
                "1, 3 and 4"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which one among the following was the focus of the Twelfth Five-Year Plan ?",
            "options": [
                "Sustainable and Inclusive Growth",
                "Social Justice and Equality",
                "Food, Work and Productivity",
                "Attainment of Self-reliance"
            ],
            "answer": "Sustainable and Inclusive Growth"
        },
        {
            "question": "Which of the following is <i>not</i> included in the Capital Account of the Balance of Payments of a country ?",
            "options": [
                "Foreign Direct Investment",
                "Commercial Borrowing",
                "Invisibles",
                "External Assistance"
            ],
            "answer": "Invisibles"
        },
        {
            "question": "The Atmanirbhar Bharat Scheme announced by the Government helps in :<br/><br/>1. Enhancing India's manufacturing capabilities and exports across the industries<br/>2. Incentivizing foreign investments for domestic production<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one of the following statements for a firm's equilibrium in Perfect Competition is <i>not</i> correct ?",
            "options": [
                "The market price must be greater or equal to average variable cost in the short run.",
                "The market price must be equal to marginal cost.",
                "The market price must be equal to average cost in the long run.",
                "The marginal cost decreases at the equilibrium output."
            ],
            "answer": "The marginal cost decreases at the equilibrium output."
        },
        {
            "question": "Which one of the following taxes is <i>not</i> included in the Central Pool to be shared with the States according to the recommendations of Finance Commission of India ?",
            "options": [
                "Personal Income Tax",
                "Corporate Profit Tax",
                "Surcharge and Cess",
                "Excise Duties"
            ],
            "answer": "Surcharge and Cess"
        },
        {
            "question": "Which one of the following dimensions is <i>not</i> included in Human Development Index ?",
            "options": [
                "Life Expectancy at birth",
                "Mean years of schooling",
                "Expected years of schooling",
                "Mortality rate"
            ],
            "answer": "Mortality rate"
        },
        {
            "question": "Suppose there are only two normal goods in the economy, X and Y. If price of good X increases, which would be the correct statement from below ?",
            "options": [
                "Demand for good X decreases and demand for Y is indeterminate.",
                "Demand for good X decreases and demand for Y decreases.",
                "Demand for good X increases and demand for Y is indeterminate.",
                "Demand for good X increases and demand for Y decreases."
            ],
            "answer": "Demand for good X decreases and demand for Y is indeterminate."
        },
        {
            "question": "If the price index increased from 100 in 2021 to 110 in 2022 to 132 in 2023, then the rate of inflation is :",
            "options": [
                "10%",
                "32%",
                "20%",
                "Cannot be determined"
            ],
            "answer": "20%"
        },
        {
            "question": "The Rangarajan Committee methodology for determining the poverty line incorporated which of the following ?<br/><br/>1. A food component<br/>2. A normative level of expenditure for essential non-food items<br/>3. A behaviourally determined expenditure for other non-food items<br/><br/>Select the answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "1 and 3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which one of the following is <i>not</i> a fund managed by NIIFL (National Investment and Infrastructure Fund Limited) ?",
            "options": [
                "Master Fund",
                "Fund of Funds",
                "Strategic Opportunities Fund",
                "Global Investment Fund"
            ],
            "answer": "Global Investment Fund"
        },
        {
            "question": "Pandit Deendayal Upadhyay National Welfare Fund was established with the view to help which one of the following groups ?",
            "options": [
                "Medical Practitioners",
                "Farmers",
                "Sportspersons",
                "War Widows"
            ],
            "answer": "Sportspersons"
        },
        {
            "question": "Which one among the following items comprises the major portion of revenue expenditure of the Union Government of India ?",
            "options": [
                "Salaries",
                "Interest Payments",
                "Road Transport and Highways",
                "Defence Services"
            ],
            "answer": "Interest Payments"
        },
        {
            "question": "India's women's badminton team recently won the Badminton Asia Team Championship, 2024. Who among the following players was <i>not</i> a part of the team ?",
            "options": [
                "P.V. Sindhu",
                "Treesa Jolly",
                "Anmol Kharb",
                "Saina Nehwal"
            ],
            "answer": "Saina Nehwal"
        },
        {
            "question": "Which of the following statements related to Indian medicine system is <i>not</i> correct ?",
            "options": [
                "The Siddha system is a holistic system of medicine.",
                "Sowa-Rigpa has been in practice in the Himalayan regions of India.",
                "Unani system of medicine has been dissociated from the Ministry of Ayush.",
                "Sushruta Samhita is a major source of Ayurveda."
            ],
            "answer": "Unani system of medicine has been dissociated from the Ministry of Ayush."
        },
        {
            "question": "Which one of the following statements is correct about NISHTHA, a Government of India initiative ?",
            "options": [
                "It is a training module recently introduced in LBSNAA for civil servants.",
                "It is a teacher-training programme.",
                "It is a training programme for the new recruits in Delhi Police to inculcate integrity of service among them.",
                "It is a workshop for newly elected Members of Parliament organized routinely by the Lok Sabha Secretariat."
            ],
            "answer": "It is a teacher-training programme."
        },
        {
            "question": "Arrange the BRICS countries in ascending order of their rank in the Human Development Report 2023-24, released by the UNDP :<br/><br/>1. China<br/>2. India<br/>3. Russia<br/>4. Brazil<br/>5. South Africa<br/><br/>Select the answer using the code given below :",
            "options": [
                "2, 5, 4, 1, 3",
                "2, 4, 5, 3, 1",
                "5, 4, 2, 3, 1",
                "4, 5, 2, 1, 3"
            ],
            "answer": "2, 5, 4, 1, 3"
        },
        {
            "question": "India has signed a Trade and Economic Partnership Agreement (TEPA) with EFTA, which is a regional group consisting of four countries. Which one of the following countries is <i>not</i> a member of this group ?",
            "options": [
                "Switzerland",
                "Norway",
                "Iceland",
                "England"
            ],
            "answer": "England"
        },
        {
            "question": "Which one of the following countries shares the territorial boundary with both Russia and Ukraine ?",
            "options": [
                "Estonia",
                "Latvia",
                "Belarus",
                "Poland"
            ],
            "answer": "Belarus"
        },
        {
            "question": "In June 2024, India signed a Memorandum of Understanding (MoU) with USA for supporting Indian Railways to achieve Mission Net Zero Carbon Emission by the year :",
            "options": [
                "2030",
                "2040",
                "2050",
                "2070"
            ],
            "answer": "2030"
        },
        {
            "question": "Which one of the following statements is correct about the PM-JANMAN scheme ?",
            "options": [
                "It is a scheme of the Government of India to impart electoral literacy to voters.",
                "It is a scheme of the Government of India for deepening of democracy in the functioning of Panchayati Raj institutions.",
                "It is a scheme of the Government of India for benefitting every member of the tribal community from Government schemes.",
                "It is a scheme of the Government of India for benefitting migrants workers in the unorganized sector."
            ],
            "answer": "It is a scheme of the Government of India for benefitting every member of the tribal community from Government schemes."
        },
        {
            "question": "Which of the following statements is <i>not</i> correct ?",
            "options": [
                "SAGAR-SETU is a mobile app, which aims to improve the Ease of Doing Business.",
                "Harit Sagar aims at achieving Zero Carbon Emission Goal.",
                "Sagar Manthan is a mission launched by Ministry of Ports, Shipping and Waterways, Government of India, to increase fish production.",
                "Costa Serena is the first international cruise liner in India."
            ],
            "answer": "Sagar Manthan is a mission launched by Ministry of Ports, Shipping and Waterways, Government of India, to increase fish production."
        },
        {
            "question": "ISRO, in its studies, has revealed that there is a 178% increase in the size of the Ghepang Ghat Glacial Lake. In which of the following States/UTs is this lake located ?",
            "options": [
                "Jammu & Kashmir",
                "Ladakh",
                "Himachal Pradesh",
                "Uttarakhand"
            ],
            "answer": "Himachal Pradesh"
        },
        {
            "question": "Which of the following State/s is/are common to Bru-Reang Agreement, NLFT (SD) Agreement and Tripartite Agreement with TIPRA ?",
            "options": [
                "Tripura",
                "Assam and Tripura",
                "Tripura and Mizoram",
                "Manipur and Mizoram"
            ],
            "answer": "Tripura"
        },
        {
            "question": "Which of the following movies won the 96<sup>th</sup> Academy Award 2024 in the Best Picture category ?",
            "options": [
                "Anatomy of a Fall",
                "Oppenheimer",
                "Barbie",
                "Killers of the Flower Moon"
            ],
            "answer": "Oppenheimer"
        },
        {
            "question": "India's first dedicated OPD for the Transgenders was opened at which one among the following hospitals ?",
            "options": [
                "AIIMS, New Delhi",
                "PGIMER, Chandigarh",
                "KGMU, Lucknow",
                "RML Hospital, New Delhi"
            ],
            "answer": "RML Hospital, New Delhi"
        },
        {
            "question": "Which one of the following statements about 'INS Tarmugli' is <i>not</i> correct ?",
            "options": [
                "It is a fast attack craft commissioned by the Indian Navy.",
                "It was commissioned at Naval Dockyard, Visakhapatnam.",
                "It was given by the Government of India to Sri Lankan Naval Force in 2006 and returned to the Indian Navy in May 2023.",
                "It is supposed to be used for coastal surveillance."
            ],
            "answer": "It was given by the Government of India to Sri Lankan Naval Force in 2006 and returned to the Indian Navy in May 2023."
        },
        {
            "question": "Which one of the following resolutions in the final agreement reached at COP28 is associated with the target of achieving 'Net Zero by 2050' ?",
            "options": [
                "Fossil fuel phase-out",
                "Methane emission cuts",
                "Global goal on adaptation",
                "Climate resilience"
            ],
            "answer": "Fossil fuel phase-out"
        }
    ],
    "2023-II": [
        {
            "question": "A person can see near objects clearly through his eyes but <b>cannot</b> see distant objects clearly. The possible reason(s) for this defect could be :\n<ol><li>Excessive curvature of the eye lens.</li><li>The eye-ball has become too small.</li><li>The focal length of the eye lens is too large.</li><li>Elongation of the eye-ball.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 only",
                "2 and 4 only",
                "1 and 4 only",
                "1 and 3 only"
            ],
            "answer": "1 and 4 only"
        },
        {
            "question": "Consider a journey by a car represented by the graph given below in three parts A, B and C. The speed of the car in these parts is v<sub>a</sub>, v<sub>b</sub> and v<sub>c</sub>, respectively :\n<img src=\"/images/cds-2023-II-gk/q2.png\" alt=\"Distance-Time Graph\" class=\"my-4 max-w-full h-auto rounded-md shadow-sm\" />\nWhich one of the following is correct in this case ?",
            "options": [
                "v<sub>a</sub> < v<sub>b</sub> < v<sub>c</sub>",
                "v<sub>b</sub> > v<sub>a</sub> > v<sub>c</sub>",
                "v<sub>a</sub> = v<sub>b</sub> = v<sub>c</sub>",
                "v<sub>a</sub> > v<sub>b</sub>; v<sub>a</sub> > v<sub>c</sub>"
            ],
            "answer": "v<sub>b</sub> > v<sub>a</sub> > v<sub>c</sub>"
        },
        {
            "question": "A concave mirror of radius of curvature 50 cm is used to form an image of an object kept at a distance of 25 cm from the mirror on its principal axis. What will be the position of the image from the mirror ?",
            "options": [
                "At infinity",
                "At 50 cm",
                "At 25 cm",
                "At 75 cm"
            ],
            "answer": "At infinity"
        },
        {
            "question": "If the Moon is brought closer to the Earth such that its distance from the Earth becomes half of the original distance, then the gravitational force of attraction between the Earth and the Moon would :",
            "options": [
                "reduce to half of its original value.",
                "increase to two times of its original value.",
                "remain the same as the original value.",
                "increase to four times of its original value."
            ],
            "answer": "increase to four times of its original value."
        },
        {
            "question": "Sonic boom is produced when a source of sound travels at a speed :",
            "options": [
                "greater than the speed of sound.",
                "greater than the speed of light.",
                "lesser than the speed of sound.",
                "equal to the speed of sound."
            ],
            "answer": "greater than the speed of sound."
        },
        {
            "question": "Which one among the following are the correct symbols for the elements gold, tin and lead, respectively ?",
            "options": [
                "Ga, Sb, Pb",
                "At, Sn, Le",
                "Au, Sn, Pb",
                "Au, Sb, Pb"
            ],
            "answer": "Au, Sn, Pb"
        },
        {
            "question": "How much percentage of carbon dioxide is present in the atmosphere of Venus and Mars ?",
            "options": [
                "45 &ndash; 47%",
                "52 &ndash; 55%",
                "74 &ndash; 77%",
                "95 &ndash; 97%"
            ],
            "answer": "95 &ndash; 97%"
        },
        {
            "question": "Which among the following methods is used to separate the constituents present in a compound ?",
            "options": [
                "Electrochemical method",
                "Heating method",
                "Fractional distillation",
                "Decomposition followed by ion exchange"
            ],
            "answer": "Electrochemical method"
        },
        {
            "question": "During white-washing of walls, slaked lime reacts slowly with carbon dioxide in air to form a thin layer of calcium carbonate on the walls. Which of the following reactions represents this correctly ?",
            "options": [
                "CaO (s) + CO₂ (g) &rarr; CaCO₃ (s)",
                "CaO (l) + CO₂ (g) &rarr; CaCO₃ (s)",
                "Ca(OH)₂ (l) + CO₂ (l) &rarr; CaCO₃ (s) + H₂O (l)",
                "Ca(OH)₂ (aq) + CO₂ (g) &rarr; CaCO₃ (s) + H₂O (l)"
            ],
            "answer": "Ca(OH)₂ (aq) + CO₂ (g) &rarr; CaCO₃ (s) + H₂O (l)"
        },
        {
            "question": "Which one of the following equations is the balanced chemical equation for the given reaction ?<br/>Fe + H₂O &rarr; Fe₃O₄ + H₂",
            "options": [
                "Fe + 4H₂O &rarr; Fe₃O₄ + H₂",
                "3Fe + H₂O &rarr; Fe₃O₄ + 2H₂",
                "3Fe + 4H₂O &rarr; Fe₃O₄ + 4H₂",
                "3Fe + 4H₂O &rarr; Fe₃O₄ + H₂"
            ],
            "answer": "3Fe + 4H₂O &rarr; Fe₃O₄ + 4H₂"
        },
        {
            "question": "The term Phyllotaxy refers to the pattern of :",
            "options": [
                "arrangement of leaves.",
                "branching in stem.",
                "flower formation on branch.",
                "arrangement of flowers."
            ],
            "answer": "arrangement of leaves."
        },
        {
            "question": "Chromosomes are composed of DNA and :",
            "options": [
                "lipids",
                "vitamins",
                "proteins",
                "carbohydrates"
            ],
            "answer": "proteins"
        },
        {
            "question": "Bacteria have an undefined nuclear region which lacks a nuclear membrane and contains only DNA without proteins. Such a region is called :",
            "options": [
                "Nucleosome",
                "Nucleus",
                "Nucleoprotein",
                "Nucleoid"
            ],
            "answer": "Nucleoid"
        },
        {
            "question": "In the following simplified diagram of a plant cell, five parts/organelles are marked from 1 to 5 :\n<img src=\"/images/cds-2023-II-gk/q14.png\" alt=\"Plant Cell Diagram\" class=\"my-4 max-w-full h-auto rounded-md shadow-sm\" />\nWhich one of the following correctly represents the above parts/organelles ?",
            "options": [
                "1 &ndash; cell membrane; 2 &ndash; cell wall; 3 &ndash; vacuole; 4 &ndash; endoplasmic reticulum; 5 &ndash; nucleus",
                "1 &ndash; cell wall; 2 &ndash; cell membrane; 3 &ndash; endoplasmic reticulum; 4 &ndash; vacuole; 5 &ndash; nucleus",
                "1 &ndash; cell wall; 2 &ndash; cell membrane; 3 &ndash; endoplasmic reticulum; 4 &ndash; nucleus; 5 &ndash; vacuole",
                "1 &ndash; cell wall; 2 &ndash; cell membrane; 3 &ndash; vacuole; 4 &ndash; endoplasmic reticulum; 5 &ndash; nucleus"
            ],
            "answer": "1 &ndash; cell wall; 2 &ndash; cell membrane; 3 &ndash; endoplasmic reticulum; 4 &ndash; nucleus; 5 &ndash; vacuole"
        },
        {
            "question": "Which one of the following is the language of the famous political treatise <i>Amuktmalyada</i> ?",
            "options": [
                "Sanskrit",
                "Tamil",
                "Kannada",
                "Telugu"
            ],
            "answer": "Telugu"
        },
        {
            "question": "Which one of the following statements about the Shvetambara Sect of Jainism is <b>not</b> correct ?",
            "options": [
                "It refers to monks, who wear white clothes.",
                "It refers to monks, who migrated to the south of Vindhyas in 4th century BCE.",
                "They recognized the existence of canonical texts including the 12 Angas.",
                "They believed that women can also attain salvation."
            ],
            "answer": "It refers to monks, who migrated to the south of Vindhyas in 4th century BCE."
        },
        {
            "question": "Where is the Vikramkhol Cave located ?",
            "options": [
                "Odisha",
                "Bihar",
                "Telangana",
                "West Bengal"
            ],
            "answer": "Odisha"
        },
        {
            "question": "Consider the following statements regarding the 'Levallois Technique' :\n<ol><li>It refers to making perforated Harappa pottery.</li><li>It refers to making prehistoric flake tools.</li></ol>\nWhich of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which of the following statements is/are correct ?\n<ol><li>The Bakshali Manuscript written in the Gatha language (a refined version of old Prakrit) using the Sharada script deals with topics such as fractions, square roots, arithmetic and geometric progressions.</li><li>In the field of geometry, Aryabhatta described the various properties of a circle giving a very accurate value for pi (&pi;) correct to four decimal places at 3.1416.</li><li>Sharangadhara Samhita is an important text on political system of ancient India.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1, 2 and 3",
                "1 and 3 only",
                "1 and 2 only",
                "2 only"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which one of the following is <b>not</b> correct about the Indian Independence Act, 1947 ?",
            "options": [
                "The Bill for the Indian Independence Act was introduced in Parliament on July 4 and received the Royal Assent on July 18, 1947.",
                "Act of 1947 laid down the basic framework of the Indian Constitution.",
                "The Act provided for the establishment of two independent Dominions to be known as India and Pakistan.",
                "The Act empowered the Constituent Assembly of each Dominion to have unlimited power to frame and adopt any constitution."
            ],
            "answer": "Act of 1947 laid down the basic framework of the Indian Constitution."
        },
        {
            "question": "As per the Cabinet Resolution of 1st January, 2015, the NITI Aayog consists of :\n<ol><li>Prime Minister of India</li><li>Governing Council comprising of Chief Minister of all the States and Lieutenant Governors of Union Territories</li><li>Rural Development Minister</li><li>Chief Executive Officer to be appointed by the Prime Minister</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1, 2 and 3",
                "1, 2 and 4",
                "1 and 2 only",
                "3 and 4 only"
            ],
            "answer": "1, 2 and 4"
        },
        {
            "question": "The executive is given an advance grant to meet temporary and running requirements of Government of India in the beginning of the new financial year until the demands are voted by the legislature. This is known as :",
            "options": [
                "Vote of Credit",
                "Vote on Account",
                "Appropriation Bill",
                "Advance Account"
            ],
            "answer": "Vote on Account"
        },
        {
            "question": "Which of the following is/are United Nations Sustainable Development Goal(s) ?\n<ol><li>Decent work and economic growth</li><li>Peace, justice and strong institutions</li><li>Responsible consumption and production</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 and 2 only",
                "1, 2 and 3",
                "2 only",
                "1 and 3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Consider the following statements on 'Fog' :\n<ol><li>Fog is simply a cloud that forms close to the ground.</li><li>Radiation fog is associated with radiation cooling of the land at night.</li><li>Advection fog forms when moisture is blown over a cold surface and is chilled by contact.</li></ol>\nWhich of the statements given above are correct ?",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which one of the following landforms is/are formed by wind erosion ?",
            "options": [
                "Cirque",
                "Stack",
                "Zeugen",
                "Stack and Zeugen both"
            ],
            "answer": "Zeugen"
        },
        {
            "question": "Which one of the following crops is <b>not</b> cultivated under dryland farming ?",
            "options": [
                "Jowar",
                "Ragi",
                "Sugarcane",
                "Groundnut"
            ],
            "answer": "Sugarcane"
        },
        {
            "question": "Which one of the following forms of settlement develops around a lake ?",
            "options": [
                "Linear",
                "Cross-shaped",
                "Circular",
                "Square"
            ],
            "answer": "Circular"
        },
        {
            "question": "How can resources be classified on the basis of their origin ?",
            "options": [
                "Biotic and abiotic",
                "Renewable and non-renewable",
                "Individual and community",
                "Potential and reserve"
            ],
            "answer": "Biotic and abiotic"
        },
        {
            "question": "Which one among the following is the highest mountain in Africa ?",
            "options": [
                "Atlas Mountain",
                "Mount Kilimanjaro",
                "Mount Kenya",
                "Mount Elgon"
            ],
            "answer": "Mount Kilimanjaro"
        },
        {
            "question": "Which of the following action(s) by the Government would lead to contraction of money supply in the economy ?\n<ol><li>Purchase of Treasury Bills by the central bank from public</li><li>Sale of Treasury Bills by the central bank to public</li><li>Sale of foreign exchange by the central bank</li><li>Purchase of foreign exchange by the central bank</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 and 4 only",
                "1 and 3 only",
                "2 and 3 only",
                "2 only"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Which of the following are included in the definition of Narrow Money ?\n<ol><li>Currency with the public</li><li>Demand deposits</li><li>'Other' deposits with Reserve Bank of India</li><li>Banker's deposits with Reserve Bank of India</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1, 2 and 4",
                "1 and 2 only",
                "1, 2 and 3",
                "3 and 4 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following is/are the effects of devaluation or depreciation of currency ?\n<ol><li>It leads to increase in imports and decrease in exports.</li><li>It leads to increase in exports and decrease in imports.</li><li>It leads to increase in domestic inflation.</li><li>It leads to decrease in domestic inflation.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 and 3 only",
                "1 and 4 only",
                "2 and 3 only",
                "3 only"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Which one of the following taxes is <b>not</b> subsumed under the Goods and Services Tax in India ?",
            "options": [
                "Customs Duties",
                "Central Excise Duties",
                "Service Tax",
                "Taxes on Petroleum and Petroleum Products"
            ],
            "answer": "Customs Duties"
        },
        {
            "question": "The following diagram shows a pendulum at different positions. Which one of the following statement is true ?\n<img src=\"/images/cds-2023-II-gk/q34.png\" alt=\"Pendulum Positions Diagram\" class=\"my-4 max-w-full h-auto rounded-md shadow-sm\" />",
            "options": [
                "The pendulum has minimum potential energy at positions P and T.",
                "The pendulum has minimum potential energy at positions Q and S.",
                "The pendulum has minimum potential energy at position R.",
                "The pendulum has same potential energy at all positions."
            ],
            "answer": "The pendulum has minimum potential energy at position R."
        },
        {
            "question": "In which of the following media is the speed of sound the maximum ?",
            "options": [
                "Glass",
                "Stainless steel",
                "Water",
                "Oxygen"
            ],
            "answer": "Stainless steel"
        },
        {
            "question": "A charged particle moves through a magnetic field <b>B</b> with a velocity <b>v</b>. Which one of the following statements is true for the force (<b>F</b>) experienced by the particle ?",
            "options": [
                "<b>F</b> is maximum when <b>v</b> and <b>B</b> are parallel to each other.",
                "<b>F</b> is maximum when <b>v</b> and <b>B</b> are anti-parallel to each other.",
                "<b>F</b> is maximum when <b>v</b> and <b>B</b> are perpendicular to each other.",
                "The force <b>F</b> is independent of the angle between <b>v</b> and <b>B</b>."
            ],
            "answer": "<b>F</b> is maximum when <b>v</b> and <b>B</b> are perpendicular to each other."
        },
        {
            "question": "Which one of the following is the correct relation between Celsius and Fahrenheit temperature scales ?\n(Symbols carry their usual meanings)",
            "options": [
                "T<sub>F</sub> = 10/3 T<sub>C</sub> + 32",
                "T<sub>F</sub> = 5/9 T<sub>C</sub> + 36",
                "T<sub>F</sub> = 9/5 T<sub>C</sub> + 36",
                "T<sub>F</sub> = 9/5 T<sub>C</sub> + 32"
            ],
            "answer": "T<sub>F</sub> = 9/5 T<sub>C</sub> + 32"
        },
        {
            "question": "Which one of the following statements is correct regarding the travel of a light beam from a rare to a dense medium ?",
            "options": [
                "A light beam travelling from a rare medium to a dense medium slows down and bends towards the normal.",
                "A light beam travelling from a rare medium to a dense medium speeds up and bends towards the normal.",
                "A light beam travelling from a rare medium to a dense medium slows down and bends away from the normal.",
                "A light beam travelling from a rare medium to a dense medium speeds up and bends away from the normal."
            ],
            "answer": "A light beam travelling from a rare medium to a dense medium slows down and bends towards the normal."
        },
        {
            "question": "In which one of the following cases do both physical and chemical changes take place ?",
            "options": [
                "Burning of candle",
                "Freezing of water",
                "Cooking of food",
                "Rusting of iron"
            ],
            "answer": "Burning of candle"
        },
        {
            "question": "Which one of the following statements is correct about diamond and graphite ?",
            "options": [
                "Diamond and graphite have similar physical and chemical properties.",
                "Diamond is hard but graphite is smooth and slippery.",
                "Diamond and graphite are both non-conductors of electricity.",
                "Both diamond and graphite have similar structures."
            ],
            "answer": "Diamond is hard but graphite is smooth and slippery."
        },
        {
            "question": "Which one among the following substances is a compound ?",
            "options": [
                "Sugar",
                "Air",
                "Milk",
                "Tea"
            ],
            "answer": "Sugar"
        },
        {
            "question": "What is the total number of naturally occurring elements ?",
            "options": [
                "114",
                "94",
                "86",
                "82"
            ],
            "answer": "94"
        },
        {
            "question": "Which one of the following statements regarding acids is <b>not</b> correct ?",
            "options": [
                "Hydrochloric acid is present in the gastric juice secreted by the stomach.",
                "Acetic acid is the main constituent of vinegar.",
                "Oxalic acid is found in tamarind paste.",
                "Lemon and orange juices contain citric acid and ascorbic acid respectively."
            ],
            "answer": "Oxalic acid is found in tamarind paste."
        },
        {
            "question": "Which one of the following is the correct combination of organelles and their functions ?",
            "options": [
                "Mitochondria &ndash; Respiration; Chloroplast &ndash; Photosynthesis; Ribosome &ndash; Protein Synthesis; Rough endoplasmic reticulum &ndash; Transport of proteins",
                "Mitochondria &ndash; Respiration; Chloroplast &ndash; Photosynthesis; Ribosome &ndash; Transport of proteins; Rough endoplasmic reticulum &ndash; Protein synthesis",
                "Mitochondria &ndash; Respiration; Chloroplast &ndash; Protein synthesis; Ribosome &ndash; Photosynthesis; Rough endoplasmic reticulum &ndash; Transport of proteins",
                "Mitochondria &ndash; Photosynthesis; Chloroplast &ndash; Respiration; Ribosome &ndash; Protein synthesis; Rough endoplasmic reticulum &ndash; Transport of proteins"
            ],
            "answer": "Mitochondria &ndash; Respiration; Chloroplast &ndash; Photosynthesis; Ribosome &ndash; Protein Synthesis; Rough endoplasmic reticulum &ndash; Transport of proteins"
        },
        {
            "question": "Cell wall is absent in which one of the following organisms ?",
            "options": [
                "Bacteria",
                "Diatom",
                "Mushroom",
                "Tapeworm"
            ],
            "answer": "Tapeworm"
        },
        {
            "question": "Water goes up through xylem vessels in tall trees. The process in plants and properties of water that help in upward movement are :",
            "options": [
                "Respiration and cohesion",
                "Transpiration pull, cohesion and adhesion",
                "Root pressure, cohesion and adhesion",
                "Transpiration and adhesion"
            ],
            "answer": "Transpiration pull, cohesion and adhesion"
        },
        {
            "question": "Energy and nutrients flow from one trophic level to another in an ecosystem. Which one of the following statements correctly describes the direction of flow of energy and nutrients in an ecosystem ?",
            "options": [
                "Energy flow is cyclic and nutrient flow is unidirectional.",
                "Energy flow is unidirectional and nutrient flow is cyclic.",
                "Both energy and nutrient flow are unidirectional.",
                "Both energy and nutrient flow are cyclic."
            ],
            "answer": "Energy flow is unidirectional and nutrient flow is cyclic."
        },
        {
            "question": "Which one of the following is a saprophyte ?",
            "options": [
                "Cuscuta",
                "Rhizopus",
                "Spirogyra",
                "Grass"
            ],
            "answer": "Rhizopus"
        },
        {
            "question": "In ovules of Angiosperms, which one of the following is <b>not</b> a haploid cell ?",
            "options": [
                "Nucellus",
                "Synergid",
                "Egg",
                "Antipodal"
            ],
            "answer": "Nucellus"
        },
        {
            "question": "Arrange the following events associated with Shivaji in chronological order :\n<ol><li>Attack on Afzal Khan</li><li>Capture of Torna</li><li>Attack on Shaista Khan</li><li>Annexation of Javli</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "2, 4, 1, 3",
                "4, 2, 1, 3",
                "1, 2, 3, 4",
                "3, 1, 2, 4"
            ],
            "answer": "2, 4, 1, 3"
        },
        {
            "question": "Who among the following is the author of the book <i>The Indian Struggle 1920 &ndash; 1942</i> ?",
            "options": [
                "Vinayak Damodar Savarkar",
                "Subhas Chandra Bose",
                "Vallabhbhai Patel",
                "Sarat Chandra Bose"
            ],
            "answer": "Subhas Chandra Bose"
        },
        {
            "question": "Who among the following is <b>not</b> a woman Nayanar saint ?",
            "options": [
                "Karaikkal Ammaiyar",
                "Mangayarkkarasiyar",
                "Andal",
                "Isaignaniyar"
            ],
            "answer": "Andal"
        },
        {
            "question": "Which one of the following pairs of terms and their meanings is <b>not</b> correctly matched ?",
            "options": [
                "Nagarakkani : Land owned by the nagaram",
                "Nattar : Male serpent deity",
                "Yupa : Sacrificial post",
                "Viragal : 'Hero stone' in the Tamil Nadu area"
            ],
            "answer": "Nattar : Male serpent deity"
        },
        {
            "question": "Where is the famous Gupta period Deogarh Temple situated ?",
            "options": [
                "Uttar Pradesh",
                "Madhya Pradesh",
                "Chhattisgarh",
                "Rajasthan"
            ],
            "answer": "Uttar Pradesh"
        },
        {
            "question": "Consider the following statements with reference to the Nataraj bronze sculpture of Chola period :\n<ol><li>Shiva is shown balancing himself on his right leg representing <i>tirobhava</i>.</li><li>Shiva is shown raising his left leg in <i>bhujangatrasita</i> stance, representing kicking away the illusion from the devotee's mind.</li><li>The main right hand holds the <i>damaru</i>, Shiva's favourite musical instrument.</li></ol>\nWhich of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "2 only"
        },
        {
            "question": "Which of the following statements about ASEAN are correct ?\n<ol><li>The Chairmanship of ASEAN rotates annually based on the alphabetical order of the English names of Member States.</li><li>The Chairmanship is decided by voting among the Member States.</li><li>\"One Vision, One Identity, One Community\" is the ASEAN motto.</li><li>12th August is celebrated as ASEAN Day.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 and 2 only",
                "1 and 3 only",
                "3 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Consider the following statements about the Public Distribution System :\n<ol><li>The Public Distribution System is operated under the joint responsibility of Centre and State/Union Territories.</li><li>Food Corporation of India has assumed the responsibility for procurement, storage and transportation of food grains to the State Governments.</li><li>Both Centre and State have the joint responsibility to identify eligible beneficiaries.</li><li>Some States also distribute additional items of mass consumption through the PDS outlets such as pulses, edible oil, etc.</li></ol>\nWhich of the statements given above are correct ?",
            "options": [
                "2 and 3 only",
                "1, 2 and 4",
                "1 and 2 only",
                "3 and 4 only"
            ],
            "answer": "1, 2 and 4"
        },
        {
            "question": "Which of the following concepts are considered as pillars of Human Development ?\n<ol><li>Equity</li><li>Sustainability</li><li>Productivity</li><li>Security</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 and 2 only",
                "3 and 4 only",
                "1, 2 and 3 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1, 2 and 3 only"
        },
        {
            "question": "Which one of the following pairs of events and years is <b>not</b> correctly matched ?",
            "options": [
                "Launch of the first communications satellite : 1962",
                "Completion of a continuous around the world fibre-optic cable link : 1997",
                "Creation of the SWIFT system for worldwide electronic interbank fund transfer : 1977",
                "Introduction of the World Wide Web (www) : 1995"
            ],
            "answer": "Introduction of the World Wide Web (www) : 1995"
        },
        {
            "question": "Identify the type of soil on the basis of given characteristics :\n<ol><li>They contain a large proportion of sodium, potassium and magnesium, and thus, they are infertile.</li><li>Their structure ranges from sandy to loamy.</li><li>They are more widespread in western Gujarat, deltas of the eastern coast and in Sunderban areas of West Bengal.</li></ol>",
            "options": [
                "Peaty soil",
                "Laterite soil",
                "Arid soil",
                "Saline soil"
            ],
            "answer": "Saline soil"
        },
        {
            "question": "Which one among the following State capitals is closest to the Equator ?",
            "options": [
                "Hyderabad",
                "Bhubaneswar",
                "Panaji",
                "Mumbai"
            ],
            "answer": "Panaji"
        },
        {
            "question": "Which is the only country in the world to officially proclaim the Gross National Happiness (GNH) as the measure of the country's progress ?",
            "options": [
                "Finland",
                "Bhutan",
                "Nepal",
                "Switzerland"
            ],
            "answer": "Bhutan"
        },
        {
            "question": "Consider the following statements about clouds :\n<ol><li>Two major forms of clouds are stratiform and cumuliform.</li><li>According to the altitude, clouds are classified as high clouds, middle clouds and low clouds.</li><li>Stratus, nimbostratus and stratocumulus are types of high clouds.</li><li>Clouds having nimbo attached to their name produce precipitation.</li></ol>\nWhich of the statements given above are correct ?",
            "options": [
                "1 and 2 only",
                "1, 2 and 4",
                "2 and 4 only",
                "1, 3 and 4"
            ],
            "answer": "1, 2 and 4"
        },
        {
            "question": "Which one of the following expenditures is subtracted from Fiscal Deficit to arrive at Primary Deficit ?",
            "options": [
                "Defence expenditure",
                "Expenditure on subsidies",
                "Interest payments",
                "Pension"
            ],
            "answer": "Interest payments"
        },
        {
            "question": "The Wholesale Price Inflation has increased in India during 2021 &ndash; 2022 due to which of the following factors ?\n<ol><li>Sharp increase in international prices of crude oil</li><li>Decrease in economic activity post-Covid</li><li>Disruption of global supply chain</li><li>High freight cost</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "2 and 3 only",
                "1, 3 and 4",
                "1 and 2 only",
                "1 and 4 only"
            ],
            "answer": "1, 3 and 4"
        },
        {
            "question": "What would be the impact on the economy if people start holding more currency in hand and less in deposits ?",
            "options": [
                "Money demand will increase",
                "Money multiplier will decrease",
                "Money multiplier will increase",
                "Money demand will decrease"
            ],
            "answer": "Money multiplier will decrease"
        },
        {
            "question": "SDG India Index, developed by NITI Aayog, includes 17 SDGs for each State. Which one of the following is <b>not</b> included in that index ?",
            "options": [
                "Zero hunger",
                "Reduced unemployment",
                "Life below water",
                "Responsible consumption and production"
            ],
            "answer": "Reduced unemployment"
        },
        {
            "question": "Other things remaining constant, the market supply for a good increases if :\n<ol><li>its price increases.</li><li>price of its factors of production decreases.</li><li>price of other goods decreases.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 and 2 only",
                "1 and 3 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "2 and 3 only"
        },
        {
            "question": "Consider the following statements regarding poverty in India :\n<ol><li>While determining poverty line in India, a minimum level of food requirement, clothing, footwear, fuel and light, educational and medical requirements, etc. are determined for subsistence.</li><li>The accepted average calorie requirement in India is 2400 calories per person per day in rural areas and 2100 calories per person per day in urban areas.</li></ol>\nWhich of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following statements is/are correct ?\n<ol><li>Shivaji sent an ambassador to Bombay to negotiate an agreement with the English.</li><li>His chief motive was to secure English aid against the Siddis of Danda-Rajpuri.</li><li>He wanted a supply of grenades, mortars and other ammunition.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 only",
                "1 and 3 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "The famous Hathigumpha inscription of Kharavela mentions that in the eleventh year of his reign, Kharavela destroyed a confederacy of Tamil States, \"Tramiradesa Sanghatam\", which had long been a source of danger. How old was this confederacy of Tamil States at that time ?",
            "options": [
                "110 years old",
                "111 years old",
                "112 years old",
                "113 years old"
            ],
            "answer": "113 years old"
        },
        {
            "question": "Which of the following statements about the Vaishnava saint of Assam, Shankardeva, is/are correct ?\n<ol><li>His teachings are often known as the Bhagavati dharma.</li><li>He encouraged the establishment of satras or monasteries and namghars or prayer halls for the transmission of spiritual knowledge.</li><li>His major compositions include the Kirtana-ghosha.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Abdur Razzaq, an ambassador of the ruler of Persia, was sent to Calicut in the fifteenth century. He was greatly impressed by the :",
            "options": [
                "Fortifications of Calicut",
                "Climatic conditions of the coastal town",
                "High quality spices of the place",
                "Musical traditions of the place"
            ],
            "answer": "Fortifications of Calicut"
        },
        {
            "question": "Which of the following statements about the 'Race to Zero Campaign' is/are correct ?\n<ol><li>One of the main objectives of the Race to Zero Campaign is to build momentum around the shift to a decarbonized economy.</li><li>It is related to the theory of Zero-Sum Game.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which of the following statements about National Action Plan on Climate Change (NAPCC) with reference to India is/are correct ?\n<ol><li>It emphasises that maintaining a high growth rate is essential for raising the living standards of the vast majority of the people of India and reducing their vulnerability to the impact of climate change.</li><li>It was released in 2014.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "What does India's \"Blue growth\" refer to ?",
            "options": [
                "Upgradation of Indian Air Force",
                "Discouraging farmers from using pesticides",
                "A long-term strategy to support sustainable growth in the marine and maritime sectors",
                "Socio-economic empowerment of India's blue collar workers in the unorganized sector"
            ],
            "answer": "A long-term strategy to support sustainable growth in the marine and maritime sectors"
        },
        {
            "question": "Which of the following statements about 'Operation Sadbhavana' in Ladakh is/are correct ?\n<ol><li>Indian Army undertakes welfare activities, such as running of Army Goodwill Schools in remote areas of Ladakh.</li><li>It aims at building harmonious relationships between religious communities in Ladakh.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which one of the following is <b>not</b> a permanent member of the UN Security Council ?",
            "options": [
                "France",
                "China",
                "Japan",
                "United Kingdom"
            ],
            "answer": "Japan"
        },
        {
            "question": "Consider the following statements about some planets in the solar system :\n<ol><li>Mercury has no atmosphere.</li><li>Venus has two moons.</li><li>There is no land on Jupiter.</li><li>Rings of Saturn are composed of lumps of ice and dust.</li></ol>\nWhich of the statements given above are correct ?",
            "options": [
                "1 and 2 only",
                "3 and 4 only",
                "1, 2 and 3",
                "1, 3 and 4"
            ],
            "answer": "1, 3 and 4"
        },
        {
            "question": "Which one of the following passes is <b>not</b> located in Indian Himalayan region ?",
            "options": [
                "Zojila",
                "Bolan",
                "Shipkila",
                "Lipulekh"
            ],
            "answer": "Bolan"
        },
        {
            "question": "Which one of the following set of trees does <b>not</b> belong to Temperate Floral Zone of Himalaya ?",
            "options": [
                "Cashewnut and Magnolia",
                "Oak and Maple",
                "Rhododendrons",
                "Birch and Laurels"
            ],
            "answer": "Cashewnut and Magnolia"
        },
        {
            "question": "Which one of the following statements about plantation agriculture is <b>not</b> correct ?",
            "options": [
                "Plantation farm estates are scientifically managed.",
                "Plantation farming requires heavy capital outlay.",
                "Plantation farm lands have mainly foreign ownership and local labour.",
                "Plantation farmers rear the animals for sale."
            ],
            "answer": "Plantation farmers rear the animals for sale."
        },
        {
            "question": "Match List I with List II and select the correct answer using the code given below the Lists :\n<div class=\"flex justify-between my-2\"><div><b>List I</b><br/>(Name of Shifting Cultivation)<br/>A. Roca<br/>B. Chena<br/>C. Masole<br/>D. Tamarai</div><div><b>List II</b><br/>(Country)<br/>1. Sri Lanka<br/>2. Thailand<br/>3. Brazil<br/>4. Zaire</div></div>",
            "options": [
                "A-2, B-4, C-1, D-3",
                "A-2, B-1, C-4, D-3",
                "A-3, B-4, C-1, D-2",
                "A-3, B-1, C-4, D-2"
            ],
            "answer": "A-3, B-1, C-4, D-2"
        },
        {
            "question": "Consider the following statements with reference to Paleolithic tools :\n<ol><li>Isampur was a well-known center of stone tool manufacture located in Gulbarga district of Karnataka and was situated along a small seasonal stream known as Kamta Halla.</li><li>A Paleolithic blade is a flake tool, the length of which is more than twice its width.</li></ol>\nWhich of the statements given above is/are correct ?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Consider the following statements about science in medieval South India :\n<ol><li>The Katapayadi system of numerals, which was invented by Vararuchi of Kerala, the author of Chandra Vakyas, was used for calculating the position of Moon on any day of the year.</li><li>Achyuta Pisharati (1550 &ndash; 1621) wrote Uparagakriyakrama, a text on eclipses.</li><li>Ravi Varma of Mahodayapuram set up an observatory and is also said to have inaugurated the Kollam era.</li></ol>\nWhich of the statements given above is/are correct ?",
            "options": [
                "1 and 3 only",
                "3 only",
                "1 and 2 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following dynasties of South India issued their documents first in Prakrit and later in Sanskrit ?",
            "options": [
                "The Cholas of Tamil Nadu",
                "The Pandyas of the post-Sangam Age",
                "The Pallavas of Tondaimandalam",
                "The Gangas of Kalinganagara"
            ],
            "answer": "The Pallavas of Tondaimandalam"
        },
        {
            "question": "Who was the author of the Gwalior Prashasti of Mihira Bhoja ?",
            "options": [
                "Nagabhata",
                "Vatsaraja",
                "Baladitya",
                "Kakkuka"
            ],
            "answer": "Baladitya"
        },
        {
            "question": "The Sahajiya Cult, which can be traced back to 10th and 11th centuries, is usually associated with :",
            "options": [
                "early Bhakti traditions",
                "a kind of early Sufism",
                "early Upanishadic philosophy",
                "Buddhism"
            ],
            "answer": "Buddhism"
        },
        {
            "question": "The landmark Supreme Court judgment in the case <i>Subhash Sharma v. Union of India</i> (1991) refers to which one of the following basic features of the Constitution of India ?",
            "options": [
                "Judicial Review",
                "Rule of Law",
                "Free and fair elections",
                "Fundamental Rights"
            ],
            "answer": "Judicial Review"
        },
        {
            "question": "Which of the following statements about the Panchayats in India, as per the Constitution of India is/are correct ?\n<ol><li>There is a provision for reservation of seats for the Scheduled Castes and Scheduled Tribes.</li><li>Panchayats are not authorised to collect taxes.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "1 only"
        },
        {
            "question": "Which one of the following statements about Mission Indradhanush, launched by the Government of India in 2014, is correct ?",
            "options": [
                "It relates to provisions for Child Health Screening and Early Intervention Services.",
                "It meets the diverse health needs of adolescents.",
                "It aims to increase the full immunisation coverage for children.",
                "Its objective is to achieve universal access to equitable, affordable, and quality healthcare services."
            ],
            "answer": "It aims to increase the full immunisation coverage for children."
        },
        {
            "question": "Which one of the following amendments to the Constitution of India has introduced reservations in education and in public employment for people from the Economically Weaker Sections (EWS) of society ?",
            "options": [
                "The Constitution (101st Amendment) Act",
                "The Constitution (102nd Amendment) Act",
                "The Constitution (122nd Amendment) Act",
                "The Constitution (103rd Amendment) Act"
            ],
            "answer": "The Constitution (103rd Amendment) Act"
        },
        {
            "question": "Which among the following Fundamental Rights is <b>not</b> suspended when an Emergency is declared ?",
            "options": [
                "Protection in respect of conviction for offences",
                "Right to constitutional remedies",
                "Right to move freely throughout the territory of India",
                "Equality before law"
            ],
            "answer": "Protection in respect of conviction for offences"
        },
        {
            "question": "Any question pertaining to the disqualification of a member of the Lok Sabha on the ground of defection is decided by :",
            "options": [
                "The President of India",
                "The Speaker of the Lok Sabha",
                "The Supreme Court of India",
                "The concerned Political Party"
            ],
            "answer": "The Speaker of the Lok Sabha"
        },
        {
            "question": "Which one of the following statements about Indian Maritime University (IMU) is <b>not</b> correct ?",
            "options": [
                "It was established through an Act of Parliament as a Central University.",
                "It was established primarily to support the Indian Navy.",
                "It is located in Chennai.",
                "It was established to extend the benefits of knowledge and skill for development of individuals and society by associating closely with local, regional and national issues of development."
            ],
            "answer": "It was established primarily to support the Indian Navy."
        },
        {
            "question": "Which of the following pairs is/are correctly matched ?\n<div class=\"flex justify-between my-2\"><div><b>Plateau</b><br/>1. Abyssinian<br/>2. Patagonian<br/>3. Anatolian<br/>4. Iberian</div><div><b>Continent</b><br/>: Africa<br/>: Australia<br/>: Asia<br/>: North America</div></div>\nSelect the correct answer using the code given below :",
            "options": [
                "1 only",
                "1 and 3 only",
                "2, 3 and 4 only",
                "1, 2, 3 and 4"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Which of the following pairs of Isolines and its properties are correctly matched ?\n<div class=\"flex justify-between my-2\"><div>1. Isonif<br/>2. Isohel<br/>3. Isohaline<br/>4. Isohypse</div><div>: Snowfall<br/>: Sunshine<br/>: Salinity<br/>: Cloudiness</div></div>\nSelect the correct answer using the code given below :",
            "options": [
                "1, 2 and 3",
                "2, 3 and 4",
                "1 and 3 only",
                "1, 2 and 4"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following is the correct order of clouds in ascending order (lowest to highest) of height from surface ?\n<ol><li>Cirrocumulus</li><li>Nimbostratus</li><li>Cirrus</li><li>Altostratus</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1, 2, 4, 3",
                "2, 4, 3, 1",
                "3, 2, 1, 4",
                "2, 4, 1, 3"
            ],
            "answer": "2, 4, 1, 3"
        },
        {
            "question": "Which of the following pairs of revolution in agriculture sector and its production are correctly matched?\n<div class=\"flex justify-between my-2\"><div>1. Pink revolution<br/>2. Yellow revolution<br/>3. Black revolution<br/>4. Golden revolution</div><div>: Shrimp production<br/>: Oilseeds production<br/>: Biodiesel production<br/>: Egg production</div></div>\nSelect the correct answer using the code given below :",
            "options": [
                "1, 2 and 3",
                "2 and 3 only",
                "1 and 3 only",
                "2 and 4 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which one among the following statements about National Highways Authority of India (NHAI) is <b>not</b> correct ?",
            "options": [
                "NHAI collects fees on the National Highway.",
                "NHAI conducts training of Highway Engineers at entry level and in-service.",
                "NHAI provides consultancy and construction services in India and abroad.",
                "NHAI regulates and controls the plying of vehicles for its proper management."
            ],
            "answer": "NHAI regulates and controls the plying of vehicles for its proper management."
        },
        {
            "question": "Which of the following statements about the National Centre for Good Governance (NCGG) are correct ?\n<ol><li>NCGG was set up by the Sardar Vallabhbhai Patel National Police Academy.</li><li>The National Institute of Administrative Research (NIAR) has been rechristened and subsumed into NCGG.</li><li>NCGG is an apex-level autonomous body under the Ministry of Home Affairs.</li><li>The Chairperson of the Governing Body of the NCGG is the Cabinet Secretary to the Government of India.</li></ol>\nSelect the correct answer using the code given below :",
            "options": [
                "1, 2 and 4",
                "2 and 4 only",
                "1 and 3 only",
                "3 and 4 only"
            ],
            "answer": "2 and 4 only"
        },
        {
            "question": "Match List I with List II and select the correct answer using the code given below the Lists :\n<div class=\"flex justify-between my-2\"><div><b>List I</b><br/>(International Yoga Day)<br/>A. 6th Edition<br/>B. 7th Edition<br/>C. 8th Edition<br/>D. 9th Edition</div><div><b>List II</b><br/>(Theme)<br/>1. Yoga for well-being<br/>2. Yoga for health &ndash; Yoga at home<br/>3. Yoga for Vasudhaiva Kutumbakam<br/>4. Yoga for Humanity</div></div>",
            "options": [
                "A-2, B-4, C-1, D-3",
                "A-2, B-1, C-4, D-3",
                "A-3, B-1, C-4, D-2",
                "A-3, B-4, C-1, D-2"
            ],
            "answer": "A-2, B-1, C-4, D-3"
        },
        {
            "question": "The joint multinational maritime exercise named IBSAMAR is conducted by the Navies of which of the following countries ?",
            "options": [
                "India, Bangladesh, Sri Lanka and Maldives",
                "India, Bangladesh and South Africa",
                "India, Bangladesh, Sri Lanka and Mauritius",
                "India, Brazil and South Africa"
            ],
            "answer": "India, Brazil and South Africa"
        },
        {
            "question": "In which one of the following cities is the Heliopolis Commonwealth War Grave Cemetery located ?",
            "options": [
                "Marseille",
                "Washington D.C.",
                "Cairo",
                "Athens"
            ],
            "answer": "Cairo"
        },
        {
            "question": "Under which one of the following rivers has India's first underwater metro rail tunnel been constructed ?",
            "options": [
                "Yamuna",
                "Ganga",
                "Hooghly",
                "Gomti"
            ],
            "answer": "Hooghly"
        },
        {
            "question": "Which among the following set of national teams participated in the South Asian Football Federation Championship &ndash; 2023 ?",
            "options": [
                "Sri Lanka, India, Bangladesh",
                "Lebanon, Kuwait, Pakistan",
                "India, Pakistan, Myanmar",
                "Nepal, Sri Lanka, Bhutan"
            ],
            "answer": "Lebanon, Kuwait, Pakistan"
        },
        {
            "question": "Which butterfly species was recently named the official butterfly of Jammu and Kashmir ?",
            "options": [
                "Noble's Helen",
                "Kaisar-i-Hind",
                "Blue Duke",
                "Blue Pansy"
            ],
            "answer": "Blue Pansy"
        },
        {
            "question": "Which company operated the ill-fated Titan submersible which recently imploded killing all five passengers while on a dive to visit the Titanic shipwreck under the waters of the North Atlantic ?",
            "options": [
                "Odyssey Marine Exploration",
                "M.A.R.E. (Marine Adventure for Research and Education)",
                "OceanGate Expeditions",
                "Seafarer Exploration Corporation"
            ],
            "answer": "OceanGate Expeditions"
        },
        {
            "question": "Which among the following is India's longest road tunnel ?",
            "options": [
                "Atal Tunnel",
                "Kuthiran Tunnel",
                "Dr. Syama Prasad Mookerjee Tunnel",
                "Banihal Qazigund Road Tunnel"
            ],
            "answer": "Dr. Syama Prasad Mookerjee Tunnel"
        },
        {
            "question": "Match List I with List II and select the correct answer using the code given below the Lists :\n<div class=\"flex justify-between my-2\"><div><b>List I</b><br/>(Padma Vibhushan / Padma Bhushan Awardee, 2023)<br/>A. Dilip Mahalanabis (posthumous)<br/>B. Sudha Murthy<br/>C. S.M. Krishna<br/>D. S.L. Bhyrappa</div><div><b>List II</b><br/>(Category)<br/>1. Literature & Education<br/>2. Public Affairs<br/>3. Social Work<br/>4. Medicine</div></div>",
            "options": [
                "A-4, B-3, C-2, D-1",
                "A-4, B-2, C-3, D-1",
                "A-1, B-2, C-3, D-4",
                "A-1, B-3, C-2, D-4"
            ],
            "answer": "A-4, B-3, C-2, D-1"
        },
        {
            "question": "Match List I with List II and select the correct answer using the code given below the Lists :\n<div class=\"flex justify-between my-2\"><div><b>List I</b><br/>(Festivals of North East India)<br/>A. Hornbill Festival<br/>B. Chapchar Kut<br/>C. Nongkrem Dance Festival<br/>D. Saga Dawa</div><div><b>List II</b><br/>(State)<br/>1. Meghalaya<br/>2. Sikkim<br/>3. Nagaland<br/>4. Mizoram</div></div>",
            "options": [
                "A-2, B-4, C-1, D-3",
                "A-3, B-1, C-4, D-2",
                "A-3, B-4, C-1, D-2",
                "A-2, B-1, C-4, D-3"
            ],
            "answer": "A-3, B-4, C-1, D-2"
        },
        {
            "question": "From which one of the following countries has India procured the S-400 Triumf air defence missile system ?",
            "options": [
                "United Kingdom",
                "U.S.A.",
                "France",
                "Russia"
            ],
            "answer": "Russia"
        },
        {
            "question": "Abhinav Bindra is the winner of the first ever individual Olympic gold medal for India. He won gold in which shooting event and in which Olympic Games ?",
            "options": [
                "10 meter air pistol, London",
                "10 meter air rifle, London",
                "10 meter air rifle, Beijing",
                "10 meter air pistol, Beijing"
            ],
            "answer": "10 meter air rifle, Beijing"
        },
        {
            "question": "Cheetahs were recently re-introduced to India from Africa. From which language is the name 'Cheetah' derived ?",
            "options": [
                "Swahili",
                "Afrikaans",
                "Somali",
                "Sanskrit"
            ],
            "answer": "Sanskrit"
        },
        {
            "question": "A new species of pit-viper was discovered in 2019 and named after the State in which it was found. Identify the State from among the following :",
            "options": [
                "Kerala",
                "Arunachal Pradesh",
                "Andaman and Nicobar Islands",
                "Assam"
            ],
            "answer": "Arunachal Pradesh"
        },
        {
            "question": "Who among the following set of players from India have either won or secured the runner-up position in the All England Badminton Tournament ?",
            "options": [
                "Prakash Padukone, P.V. Sindhu, Parupalli Kashyap",
                "Pullela Gopichand, Saina Nehwal, Lakshya Sen",
                "Prakash Padukone, Pullela Gopichand, Srikanth Kidambi",
                "Lakshya Sen, Saina Nehwal, P.V. Sindhu"
            ],
            "answer": "Pullela Gopichand, Saina Nehwal, Lakshya Sen"
        },
        {
            "question": "Who among the following leaders recently won the election to the office of the President of Turkey ?",
            "options": [
                "Recep Tayyip Erdo&#287;an",
                "Kemal K&#305;l&#305;&#231;daro&#287;lu",
                "Ahmet Necdet Sezer",
                "Abdullah G&uuml;l"
            ],
            "answer": "Recep Tayyip Erdo&#287;an"
        },
        {
            "question": "Georgi Gospodinov Georgiev won the International Booker Prize, 2023 for the darkly comic novel by the name :",
            "options": [
                "The Promise",
                "Shuggie Bain",
                "Time Shelter",
                "Girl, Woman, Other"
            ],
            "answer": "Time Shelter"
        },
        {
            "question": "The <i>Grand Order of the Chain of the Yellow Star</i> is the highest civilian honour of which among the following countries ?",
            "options": [
                "Fiji",
                "Papua New Guinea",
                "Egypt",
                "Suriname"
            ],
            "answer": "Suriname"
        },
        {
            "question": "Which one among the following correctly represents the theme on which the interiors of the new Parliament Building is based ?",
            "options": [
                "Lok Sabha: Lotus, Rajya Sabha: Banyan",
                "Lok Sabha: Peacock, Rajya Sabha: Lotus",
                "Lok Sabha: Peacock, Rajya Sabha: Banyan",
                "Lok Sabha: Lotus, Rajya Sabha: Peacock"
            ],
            "answer": "Lok Sabha: Peacock, Rajya Sabha: Lotus"
        }
    ],
    "2023-I": [
        {
            "question": "A sprinter feels cramps and pain in the thigh muscles after a run. This is due to accumulation of",
            "options": [
                "lactic acid",
                "CO2",
                "pyruvic acid",
                "ethanol"
            ],
            "answer": "lactic acid"
        },
        {
            "question": "A leaf was plucked from a plant on a sunny day and kept for 2 minutes in boiling water. It was subsequently immersed in boiling alcohol and treated with iodine solution. What will be the final colour of the leaf after the test?",
            "options": [
                "Colourless",
                "Green",
                "Blue",
                "White"
            ],
            "answer": "Blue"
        },
        {
            "question": "If the red blood cells (RBCs) of human blood are isolated and are diluted in normal saline (an isotonic solution to blood), what will happen to the RBCs?",
            "options": [
                "The RBCs will swell",
                "The RBCs will swell and burst",
                "The RBCs will shrink",
                "No change in the diameters of the RBCs"
            ],
            "answer": "No change in the diameters of the RBCs"
        },
        {
            "question": "Which one of the following statements regarding bile secreted by liver is <i>not</i> correct?",
            "options": [
                "Bile contains enzymes for digestion of lipids.",
                "Bile facilitates emulsification of fats.",
                "Bile neutralizes the acidic pH of the food coming from stomach.",
                "Bile makes the pH of the food alkaline and facilitates action of pancreatic enzymes."
            ],
            "answer": "Bile contains enzymes for digestion of lipids."
        },
        {
            "question": "The blood pressure of a normal human being is found to be 120/80 mmHg. These 'numbers' represent the blood pressure at",
            "options": [
                "ventricular contraction and ventricular relaxation, respectively",
                "ventricular relaxation and ventricular contraction, respectively",
                "auricular contraction and auricular relaxation, respectively",
                "ventricular contraction and auricular contraction, respectively"
            ],
            "answer": "ventricular contraction and ventricular relaxation, respectively"
        },
        {
            "question": "A person burned a firecracker in front of a cliff and heard its echo 5 s after it burst. The distance of the cliff from the person, if the speed of the sound is 340 m/s, is close to",
            "options": [
                "1700 m",
                "170 m",
                "85 m",
                "850 m"
            ],
            "answer": "850 m"
        },
        {
            "question": "Consider the following statements about the microphone and the speaker of a mobile phone :<br/><ol><li>The microphone converts sound to a mechanical signal.</li><li>The microphone converts sound to an electrical signal.</li><li>The speaker converts a mechanical signal to sound.</li><li>The speaker converts an electrical signal to sound.</li></ol><br/>Which of the statements given above are correct?",
            "options": [
                "1 and 3",
                "1 and 4",
                "2 and 3",
                "2 and 4"
            ],
            "answer": "2 and 4"
        },
        {
            "question": "A 100 W electric bulb is used for 10 hours a day. How many units of electrical energy are consumed by the bulb in 3 days? (1 unit = 1 kWh)",
            "options": [
                "3.00",
                "1.08",
                "2.16",
                "0.33"
            ],
            "answer": "3.00"
        },
        {
            "question": "The area under the velocity-time graph for a particle moving in a straight line with uniform acceleration gives",
            "options": [
                "its average velocity",
                "its net displacement",
                "the distance travelled by it",
                "its average speed"
            ],
            "answer": "its net displacement"
        },
        {
            "question": "The power of a lens of focal length 10 cm is",
            "options": [
                "0.1 dioptre",
                "1 dioptre",
                "10 dioptre",
                "100 dioptre"
            ],
            "answer": "10 dioptre"
        },
        {
            "question": "Consider the following statements regarding burning of magnesium ribbon in air :<br/><ol><li>White powder of MgO is formed.</li><li>It is an example of combustion reaction.</li><li>Heat and light are produced.</li></ol><br/>Which of the statements given above are correct?",
            "options": [
                "1 and 2 only",
                "1 and 3 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following statements with regard to the reaction given below are correct?<br/>CaO(s) + H<sub>2</sub>O(l) &rarr; Ca(OH)<sub>2</sub> (aq) + Heat<br/><ol><li>Quicklime is used for whitewashing of walls.</li><li>The solution of slaked lime is used for whitewashing of walls.</li><li>CaO reacts slowly with CO<sub>2</sub> in air to form a thin layer of CaCO<sub>3</sub> on walls.</li><li>Calcium hydroxide called 'slaked lime' is an inorganic compound.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 4 only",
                "2 and 4",
                "2 and 3",
                "1, 3 and 4"
            ],
            "answer": "2 and 4"
        },
        {
            "question": "Which of the following statements with regard to heating of lead nitrate powder over a flame are correct?<br/><ol><li>Brown fumes of NO are released.</li><li>Colourless O<sub>2</sub> gas is released.</li><li>It is an example of oxidation reaction.</li><li>It is an example of thermal decomposition used for the production of NO<sub>2</sub> gas.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2",
                "2, 3 and 4",
                "1, 3 and 4",
                "2 and 4 only"
            ],
            "answer": "2 and 4 only"
        },
        {
            "question": "Which one of the following is <i>not</i> an oxidation reaction?",
            "options": [
                "Rusting of iron",
                "Opening of soda bottle",
                "Rancidity",
                "Combustion"
            ],
            "answer": "Opening of soda bottle"
        },
        {
            "question": "Consider the following clues about a State of India :<br/><ol><li>It is known as 'land of red river and blue hills'.</li><li>It contains three of the six physiographic divisions of India.</li><li>It covers about 2.39 percent of total areas of the country.</li></ol><br/>Identify the State on the basis of the given clues.",
            "options": [
                "Karnataka",
                "Andhra Pradesh",
                "Assam",
                "Chhattisgarh"
            ],
            "answer": "Assam"
        },
        {
            "question": "Which of the following sets of States shares boundary with Telangana?",
            "options": [
                "Odisha, Andhra Pradesh, Karnataka, Maharashtra",
                "Chhattisgarh, Andhra Pradesh, Karnataka, Madhya Pradesh",
                "Odisha, Andhra Pradesh, Karnataka, Madhya Pradesh",
                "Chhattisgarh, Andhra Pradesh, Karnataka, Maharashtra"
            ],
            "answer": "Chhattisgarh, Andhra Pradesh, Karnataka, Maharashtra"
        },
        {
            "question": "Rani told her friends that last year she did boating in four different lakes, namely, Loktak, Barapani, Kolleru and Pulicat. Which of the following States did she visit?",
            "options": [
                "Manipur, Meghalaya, Kerala, Tamil Nadu",
                "Manipur, Meghalaya, Andhra Pradesh, Tamil Nadu",
                "Mizoram, Assam, Kerala, Tamil Nadu",
                "Mizoram, Assam, Andhra Pradesh, Tamil Nadu"
            ],
            "answer": "Manipur, Meghalaya, Andhra Pradesh, Tamil Nadu"
        },
        {
            "question": "According to the Census 2011, which of the following statements is/are correct?<br/><ol><li>A person who can only read but cannot write, is not literate.</li><li>A person aged seven years and above, who can both read and write with understanding in any language is treated as literate.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "The Tropic of Cancer passes through how many coastal and landlocked States of India, respectively?",
            "options": [
                "1 and 7",
                "2 and 6",
                "2 and 5",
                "3 and 5"
            ],
            "answer": "2 and 6"
        },
        {
            "question": "Which one of the following situations can lead to inflation?",
            "options": [
                "Rapid growth of aggregate demand outweighing supply",
                "Sluggish growth of aggregate demand",
                "Reduction in the money supply",
                "Higher levels of unemployment"
            ],
            "answer": "Rapid growth of aggregate demand outweighing supply"
        },
        {
            "question": "Which of the following policies help to raise interest rate unambiguously and thereby lead to appreciation of currency?",
            "options": [
                "Expansionary fiscal and monetary policy",
                "Contractionary fiscal and monetary policy",
                "Contractionary fiscal policy and expansionary monetary policy",
                "Contractionary monetary policy and expansionary fiscal policy"
            ],
            "answer": "Contractionary monetary policy and expansionary fiscal policy"
        },
        {
            "question": "The contraction of private investment spending due to deficit spending by the Government is called",
            "options": [
                "crowding out",
                "crowding in",
                "pump priming",
                "dumping"
            ],
            "answer": "crowding out"
        },
        {
            "question": "Which among the following is/are the objective/objectives of the NITI Aayog?<br/><ol><li>Imposing policies on the States/UTs</li><li>Allocation of funds at National and State levels</li><li>Design strategies and long-term policies and programme frameworks</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3",
                "3 only"
            ],
            "answer": "3 only"
        },
        {
            "question": "The computation of poverty in terms of Monthly Per Capita Consumption Expenditure (MPCE) based on the Mixed Reference Period was recommended by the",
            "options": [
                "Lakdawala Committee",
                "Tendulkar Committee",
                "Dandekar Committee",
                "Alagh Committee"
            ],
            "answer": "Tendulkar Committee"
        },
        {
            "question": "Which of the following is/are the sub-mission/sub-missions of the National Skill Development Mission (NSDM)?<br/><ol><li>Institutional training</li><li>Overseas employment</li><li>Leveraging of public infrastructure</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "1, 2 and 3",
                "2 and 3 only"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following strategies is/are adopted for implementing the POSHAN Abhiyaan?<br/><ol><li>Inter-sectoral convergence for better service delivery</li><li>Use of technology (ICT) for real-time growth monitoring of women and children</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which of the following conditions is/are necessary for the issue of a writ of certiorari in India?<br/><ol><li>There should be a tribunal or an officer having legal authority to determine questions affecting rights of subjects and having a duty to act judicially.</li><li>Such tribunal or officer has acted without jurisdiction.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Who among the following Chief Justices of India ordered the constitution of a Special Bench called 'Social Justice Bench'?",
            "options": [
                "Justice H. L. Dattu",
                "Justice K. G. Balakrishnan",
                "Justice R. M. Lodha",
                "Justice Y. K. Sabharwal"
            ],
            "answer": "Justice H. L. Dattu"
        },
        {
            "question": "Who among the following is the author of the book, <i>Bandi Jivan</i>?",
            "options": [
                "Rash Behari Bose",
                "Veer Savarkar",
                "Aruna Asaf Ali",
                "Sachindranath Sanyal"
            ],
            "answer": "Sachindranath Sanyal"
        },
        {
            "question": "In the election held in 1937, in which two provinces was the Indian National Congress <i>not</i> able to emerge as the single largest party?",
            "options": [
                "Punjab and Sind",
                "Assam and North-West Frontier Province",
                "Punjab and Assam",
                "Assam and Madras"
            ],
            "answer": "Punjab and Sind"
        },
        {
            "question": "Consider the following statements :<br/>After forming the Indian National Army, Subhas Chandra Bose<br/><ol><li>recruited a large number of soldiers from the Indian Prisoners of War in Japanese camp</li><li>introduced a women's detachment named after the Rani of Jhansi</li></ol><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which one of the following pairs denoting various forms of 'Bhakti' is <i>not</i> correctly matched?",
            "options": [
                "Saguna : Belief in Gods with attributes",
                "Nirguna : Belief in Gods without attributes",
                "Alvars : Believed in devotion of Shakti",
                "Nayanars : Believed in devotion of Shiva"
            ],
            "answer": "Alvars : Believed in devotion of Shakti"
        },
        {
            "question": "Which two rivers flow in the region between Gulbarga and Vijayanagara Hampi?",
            "options": [
                "Narmada and Godavari",
                "Mahanadi and Godavari",
                "Kaveri and Periyar",
                "Krishna and Tungabhadra"
            ],
            "answer": "Krishna and Tungabhadra"
        },
        {
            "question": "Which of the following is the only paramilitary force with a dual control structure?",
            "options": [
                "Central Reserve Police Force",
                "Assam Rifles",
                "Indo-Tibetan Border Police",
                "Central Industrial Security Force"
            ],
            "answer": "Assam Rifles"
        },
        {
            "question": "Which one of the following is an ethnic community of Assam?",
            "options": [
                "Bhil",
                "Gond",
                "Ahom",
                "Adi"
            ],
            "answer": "Ahom"
        },
        {
            "question": "The Chevrons is the name of the cricket team of which one of the following countries?",
            "options": [
                "Australia",
                "The Netherlands",
                "Ireland",
                "Zimbabwe"
            ],
            "answer": "Zimbabwe"
        },
        {
            "question": "Cheetahs, brought from Namibia, were introduced in India to which one of the following National Parks?",
            "options": [
                "Kaziranga National Park",
                "Keoladeo Ghana National Park",
                "Keibul Lamjao National Park",
                "Kuno National Park"
            ],
            "answer": "Kuno National Park"
        },
        {
            "question": "Who among the following is <i>not</i> a recipient of the Nobel Prize in Physics in 2022?",
            "options": [
                "Alain Aspect",
                "John F. Clauser",
                "Klaus Hasselmann",
                "Anton Zeilinger"
            ],
            "answer": "Klaus Hasselmann"
        },
        {
            "question": "Reflex arcs are evolved in animals for quick and efficient responses. Which one of the following sequences correctly represents a reflex arc?",
            "options": [
                "Receptor—Sensory neuron—Relay neuron in spinal cord—Motor neuron—Effector",
                "Receptor—Sensory neuron—Brain—Relay neuron in spinal cord—Motor neuron—Effector",
                "Receptor—Motor neuron—Relay neuron in spinal cord—Sensory neuron—Effector",
                "Receptor—Motor neuron—Brain—Sensory neuron—Effector"
            ],
            "answer": "Receptor—Sensory neuron—Relay neuron in spinal cord—Motor neuron—Effector"
        },
        {
            "question": "Which one of the following is essential for thyroid gland to make thyroxin?",
            "options": [
                "NaCl",
                "KCl",
                "Cholesterol",
                "Iodine"
            ],
            "answer": "Iodine"
        },
        {
            "question": "In plant cells, RNA is present in",
            "options": [
                "cytoplasm only",
                "nuclei and cytoplasm only",
                "nuclei, cytoplasm, mitochondria, chloroplast and endoplasmic reticulum",
                "nuclei, cytoplasm, mitochondria, chloroplast and ribosomes"
            ],
            "answer": "nuclei, cytoplasm, mitochondria, chloroplast and ribosomes"
        },
        {
            "question": "In grasses, intercalary meristem is usually located at",
            "options": [
                "root tip",
                "lateral sides of stem",
                "base of leaves",
                "shoot tip"
            ],
            "answer": "base of leaves"
        },
        {
            "question": "Xylem is a type of complex tissue in plants for upward conduction of water. Which one of the following xylem tissues consists of living cells?",
            "options": [
                "Tracheid",
                "Vessel",
                "Xylem parenchyma",
                "Xylem fibre"
            ],
            "answer": "Xylem parenchyma"
        },
        {
            "question": "Three resistors of resistances 11 &Omega;, 22 &Omega; and 33 &Omega; are connected in parallel. Their equivalent resistance is equal to",
            "options": [
                "66 &Omega;",
                "22 &Omega;",
                "12 &Omega;",
                "6 &Omega;"
            ],
            "answer": "6 &Omega;"
        },
        {
            "question": "The r.m.s. potential difference between the red live wire and black neutral wire in Indian domestic electric supply is",
            "options": [
                "160 V",
                "220 V",
                "300 V",
                "410 V"
            ],
            "answer": "220 V"
        },
        {
            "question": "The hydrogen bomb and the uranium bomb are based, respectively on",
            "options": [
                "nuclear fusion and fission",
                "fission and thermonuclear fusion",
                "geothermal fission and fusion",
                "geothermal fusion and fission"
            ],
            "answer": "nuclear fusion and fission"
        },
        {
            "question": "Sound and light waves are",
            "options": [
                "respectively longitudinal and transverse in air",
                "respectively transverse and longitudinal in air",
                "both longitudinal in air",
                "both transverse in air"
            ],
            "answer": "respectively longitudinal and transverse in air"
        },
        {
            "question": "A car moving with a speed of 12 m/s is subjected to brakes which produces a deceleration of 6 m/s<sup>2</sup>. The car takes 2 s to stop after the application of brakes. What is the distance covered by the car after the application of brakes?",
            "options": [
                "12 m",
                "24 m",
                "36 m",
                "48 m"
            ],
            "answer": "12 m"
        },
        {
            "question": "What is the chemical composition of a soda-acid type fire extinguisher?",
            "options": [
                "Solution of sodium hydrogen carbonate and sulfuric acid",
                "Solution of sodium carbonate and sulfuric acid",
                "Solution of carbon dioxide and sulfuric acid",
                "Solution of sodium chloride and sulfuric acid"
            ],
            "answer": "Solution of sodium hydrogen carbonate and sulfuric acid"
        },
        {
            "question": "Consider the following statements :<br/>While diluting concentrated nitric acid solution<br/><ol><li>the concentration of [H<sub>3</sub>O<sup>+</sup>] ions / volume increases</li><li>water must be added slowly to concentrated acid</li><li>acid must be added slowly to water</li></ol><br/>Which of the statements given above is/are correct?",
            "options": [
                "1, 2 and 3",
                "1 and 2 only",
                "3 only",
                "2 and 3 only"
            ],
            "answer": "3 only"
        },
        {
            "question": "Which one of the following is the correct order of pH for the given substances?",
            "options": [
                "Coffee < Lemon juice < Milk of magnesia < Blood",
                "Milk of magnesia < Blood < Coffee < Lemon juice",
                "Lemon juice < Blood < Coffee < Milk of magnesia",
                "Lemon juice < Coffee < Blood < Milk of magnesia"
            ],
            "answer": "Lemon juice < Coffee < Blood < Milk of magnesia"
        },
        {
            "question": "Which one of the following is <i>not</i> true for anodizing process?",
            "options": [
                "It makes aluminium corrosion resistant.",
                "Metals like aluminium, titanium and magnesium can be anodized.",
                "Clean aluminium article is the anode and oxygen gas is evolved at the cathode.",
                "It is used in aircraft industry."
            ],
            "answer": "Clean aluminium article is the anode and oxygen gas is evolved at the cathode."
        },
        {
            "question": "Naphthalene burns with a yellow sooty flame. This is because",
            "options": [
                "carbon to hydrogen ratio is low",
                "there is incomplete combustion",
                "there is excess supply of air",
                "of presence of impurities of nitrogen and sulfur"
            ],
            "answer": "there is incomplete combustion"
        },
        {
            "question": "Which of the following statements are true for the reaction of Fe<sub>2</sub>O<sub>3</sub> with aluminium?<br/><ol><li>It is known as the 'thermite reaction'.</li><li>The heat evolved is used for welding purpose.</li><li>Aluminium metal acts as an oxidizing agent.</li><li>Molten Fe and Al are formed at the end of the reaction.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2",
                "1 and 3",
                "2 and 4",
                "1 and 4"
            ],
            "answer": "1 and 2"
        },
        {
            "question": "Vicky told his friends about his visit to Stewart Island, Bay of Plenty and Hawke Bay. Which country did Vicky visit?",
            "options": [
                "Canada",
                "Australia",
                "New Zealand",
                "Ireland"
            ],
            "answer": "New Zealand"
        },
        {
            "question": "Manav is planning to visit all UNESCO World Heritage Sites in Delhi. He will be visiting",
            "options": [
                "Red Fort, Qutab Minar, Jama Masjid",
                "Red Fort, India Gate, Qutab Minar",
                "Red Fort, Qutab Minar, Humayun Tomb",
                "Red Fort, Humayun Tomb, India Gate"
            ],
            "answer": "Red Fort, Qutab Minar, Humayun Tomb"
        },
        {
            "question": "What will be the correct sequence of cities on the bank of river Ganga if someone moves from west to east?",
            "options": [
                "Prayagraj, Kanpur, Bhagalpur, Patna",
                "Prayagraj, Kanpur, Patna, Bhagalpur",
                "Kanpur, Prayagraj, Bhagalpur, Patna",
                "Kanpur, Prayagraj, Patna, Bhagalpur"
            ],
            "answer": "Kanpur, Prayagraj, Patna, Bhagalpur"
        },
        {
            "question": "Which one among the following States has the longest extension in north-south direction?",
            "options": [
                "Jharkhand",
                "Telangana",
                "Odisha",
                "Chhattisgarh"
            ],
            "answer": "Chhattisgarh"
        },
        {
            "question": "Match List-I with List-II and select the correct answer using the code given below the Lists :<br/><br/><table><tr><th>List-I (Day)</th><th>List-II (Date)</th></tr><tr><td>A. World Wetlands Day</td><td>1. 29 July</td></tr><tr><td>B. International Tiger Day</td><td>2. 22 April</td></tr><tr><td>C. World Water Day</td><td>3. 2 February</td></tr><tr><td>D. International Mother Earth Day</td><td>4. 22 March</td></tr></table><br/>Code :",
            "options": [
                "A-3, B-4, C-1, D-2",
                "A-3, B-1, C-4, D-2",
                "A-2, B-1, C-4, D-3",
                "A-2, B-4, C-1, D-3"
            ],
            "answer": "A-3, B-1, C-4, D-2"
        },
        {
            "question": "Which one of the following States/UTs is <i>not</i> among the top five in the Performance Grading Index (PGI), published by the Ministry of Education for the year 2020-2021?",
            "options": [
                "Kerala",
                "Punjab",
                "NCT of Delhi",
                "Chandigarh"
            ],
            "answer": "NCT of Delhi"
        },
        {
            "question": "Consider the following statements and identify the actress :<br/><br/><i>She is a renowned film actress, director and producer, and an accomplished Indian classical dancer. She was conferred the Padma Shri in 1992 and has served as the Head of Central Board for Film Certification from 1998 to 2001. In recognition to her exemplary lifetime contribution to Indian Cinema, she was honoured with the prestigious Dadasaheb Phalke Award.</i>",
            "options": [
                "Vyjayanthimala",
                "Waheeda Rehman",
                "Mala Sinha",
                "Asha Parekh"
            ],
            "answer": "Asha Parekh"
        },
        {
            "question": "Which one of the following is the venue of the UN 2023 Water Conference?",
            "options": [
                "Washington, DC",
                "New York",
                "San Diego",
                "New Delhi"
            ],
            "answer": "New York"
        },
        {
            "question": "Which of the following statements is/are correct?<br/><ol><li><i>Tomb of Sand</i>, written by Geetanjali Shree, is the first book originally written in any Indian language to win the International Booker Prize.</li><li><i>Tomb of Sand</i> is the first novel translated from Hindi to be given the International Booker Prize.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "The eighth edition of the Exercise Garuda Shakti, a bilateral military-to-military exercise, was conducted recently between the special forces of India and",
            "options": [
                "Japan",
                "Indonesia",
                "Bhutan",
                "Myanmar"
            ],
            "answer": "Indonesia"
        },
        {
            "question": "Which one of the following is a measure that can be used by the Government for combatting inflation?",
            "options": [
                "Increasing the non-planned expenditure on defence, police, etc.",
                "Providing more subsidies on exports",
                "Increasing the rate of interest on savings and fixed deposits",
                "Reduction in the cash reserve ratio (CRR)"
            ],
            "answer": "Increasing the rate of interest on savings and fixed deposits"
        },
        {
            "question": "The sustained decrease in the general price level is called as",
            "options": [
                "deflation",
                "stagflation",
                "devaluation",
                "recession"
            ],
            "answer": "deflation"
        },
        {
            "question": "Which one of the following indicators is included in the National Multidimensional Poverty Index (MPI)?",
            "options": [
                "Years of schooling",
                "Literacy rate",
                "Life expectancy",
                "Per capita income"
            ],
            "answer": "Years of schooling"
        },
        {
            "question": "The unemployment that occurs due to changes in the technology or in the demand for particular products is called",
            "options": [
                "frictional unemployment",
                "structural unemployment",
                "cyclical unemployment",
                "disguised unemployment"
            ],
            "answer": "structural unemployment"
        },
        {
            "question": "Which of the following is/are the objective/objectives of the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)?<br/><ol><li>Correcting regional imbalances in the availability of tertiary health care services</li><li>Providing universal access to public health services and universal immunization</li><li>Augmenting facilities for quality medical education in the country</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 3 only",
                "2 and 3 only",
                "1 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Who among the following political leaders suggested the dissolution of the Indian National Congress as a political organization and its replacement by a Lok Sevak Sangh?",
            "options": [
                "Vallabhbhai Patel",
                "Dr. B. R. Ambedkar",
                "M. K. Gandhi",
                "Jawaharlal Nehru"
            ],
            "answer": "M. K. Gandhi"
        },
        {
            "question": "India is the first country in the world to deploy an all-woman contingent to a UN Peacekeeping Mission. In which country did this mission operate?",
            "options": [
                "Liberia",
                "Sudan",
                "Burundi",
                "Croatia"
            ],
            "answer": "Liberia"
        },
        {
            "question": "Which one among the following is <i>not</i> a part of the SWAYAM programme?",
            "options": [
                "Video lectures",
                "Classroom lectures",
                "Online discussion forum for clearing doubts",
                "Specially prepared material that can be downloaded/printed"
            ],
            "answer": "Classroom lectures"
        },
        {
            "question": "Which one among the following Departments/Authorities is <i>not</i> under the Ministry of Home Affairs?",
            "options": [
                "The Department of States",
                "The Department of Official Language",
                "The National Authority Chemical Weapons Convention",
                "The Department of Jammu, Kashmir and Ladakh Affairs"
            ],
            "answer": "The National Authority Chemical Weapons Convention"
        },
        {
            "question": "Who among the following is given discretionary powers under the Fifth Schedule of the Constitution of India to set up a Tribes Advisory Council in a State which has Scheduled Tribes but not Scheduled Areas?",
            "options": [
                "The Governor of the concerned State",
                "The President of India",
                "The Inter-State Council",
                "The Parliament of India"
            ],
            "answer": "The President of India"
        },
        {
            "question": "Which of the following States/UTs are included in the Northern Zonal Council?",
            "options": [
                "Uttarakhand, Uttar Pradesh, Haryana, Punjab, Jammu and Kashmir",
                "Haryana, Punjab, Himachal Pradesh, Rajasthan and NCT of Delhi",
                "Uttar Pradesh, Uttarakhand, Punjab, Haryana and Rajasthan",
                "Uttarakhand, Uttar Pradesh, Himachal Pradesh, Punjab and Haryana"
            ],
            "answer": "Haryana, Punjab, Himachal Pradesh, Rajasthan and NCT of Delhi"
        },
        {
            "question": "The notion of kinship projected by the Kushana rulers is best evidenced through which of the following?",
            "options": [
                "Their identification with deities",
                "Grants to religious institutions",
                "Inscriptional panegyrics",
                "Coins and sculpture"
            ],
            "answer": "Coins and sculpture"
        },
        {
            "question": "Who among the following were referred to as the 'Theris' in ancient India?",
            "options": [
                "Respected women",
                "Elder nuns in Buddhism",
                "Women denied the Bhikkhuni status",
                "Women expelled from the Buddhist Sangha"
            ],
            "answer": "Elder nuns in Buddhism"
        },
        {
            "question": "Which member of the Servants of India Society founded the Seva Samiti at Allahabad in 1914?",
            "options": [
                "Shri Ram Bajpai",
                "Hriday Nath Kunzru",
                "S. G. Vaze",
                "Srinivas Shastri"
            ],
            "answer": "Hriday Nath Kunzru"
        },
        {
            "question": "The First Anglo-Maratha War was concluded by which one of the following?",
            "options": [
                "The Treaty of Surat",
                "The Treaty of Purandar",
                "The Convention of Wadgaon",
                "The Treaty of Salbai"
            ],
            "answer": "The Treaty of Salbai"
        },
        {
            "question": "Name the battle in which the Travancore King defeated the Dutch in 1741.",
            "options": [
                "The Battle of Porto Novo",
                "The Battle of Colachel",
                "The Battle of Pollilore",
                "The Battle of Changanassery"
            ],
            "answer": "The Battle of Colachel"
        },
        {
            "question": "In which one of the following revolts did the Koya and Konda tribal chiefs rise against the local overlord from a Mansabdar family?",
            "options": [
                "The Rampa Rebellion, 1879-1880",
                "The Gudem Uprising, 1886",
                "The Rampa Rebellion, 1922-1924",
                "The Telangana Armed Struggle, 1946-1951"
            ],
            "answer": "The Rampa Rebellion, 1879-1880"
        },
        {
            "question": "Which country won the FIFA World Cup (Men) for maximum number of times?",
            "options": [
                "Argentina",
                "Brazil",
                "France",
                "Spain"
            ],
            "answer": "Brazil"
        },
        {
            "question": "Who among the following is the author of the famous novel, <i>City of Joy</i>?",
            "options": [
                "Larry Collins",
                "Dominique Lapierre",
                "Rudyard Kipling",
                "Mark Tully"
            ],
            "answer": "Dominique Lapierre"
        },
        {
            "question": "Who among the following is honoured with the UN Environment Programme's 2022 Champions of the Earth Award in the Entrepreneurial Vision category?",
            "options": [
                "Ela Bhatt",
                "Amit Dasgupta",
                "Purnima Devi Barman",
                "Vanshika Parmar"
            ],
            "answer": "Purnima Devi Barman"
        },
        {
            "question": "The theme of India's G20 Presidency 'Vasudhaiva Kutumbakam' or 'One Earth-One Family-One Future' is drawn from the",
            "options": [
                "Maha Purana",
                "Maha Upanishad",
                "Rig Veda",
                "Smriti"
            ],
            "answer": "Maha Upanishad"
        },
        {
            "question": "The 16th edition of Indo-Nepal annual joint training exercise in jungle warfare and counterterrorism operations was held in December 2022 at Nepal Army Battle School, Saljhandi. What is the name of this exercise?",
            "options": [
                "Sampriti",
                "Mitra Shakti",
                "Yudh Abhyas",
                "Surya Kiran"
            ],
            "answer": "Surya Kiran"
        },
        {
            "question": "If it is 10:00 a.m. at Greenwich Mean Time (GMT), then what will be the time at 90&deg; E longitude?",
            "options": [
                "5:00 a.m.",
                "4:00 a.m.",
                "3:00 p.m.",
                "4:00 p.m."
            ],
            "answer": "4:00 p.m."
        },
        {
            "question": "Which of the following groups of planets is termed as 'gas planets' as they are composed primarily of lighter ices, liquids and gases?",
            "options": [
                "Mars, Jupiter, Neptune, Uranus",
                "Jupiter, Uranus, Neptune, Saturn",
                "Saturn, Mars, Jupiter, Neptune",
                "Neptune, Saturn, Mars, Uranus"
            ],
            "answer": "Jupiter, Uranus, Neptune, Saturn"
        },
        {
            "question": "Consider the following characteristics of a soil type :<br/><ol><li>These soils consist of various proportions of sand, silt and clay.</li><li>These soils contain adequate proportions of potash, phosphoric acid and lime.</li><li>These soils can be further classified on the basis of their age.</li></ol><br/>Identify the type of soil on the basis of the given characteristics.",
            "options": [
                "Alluvial",
                "Laterite",
                "Arid",
                "Black"
            ],
            "answer": "Alluvial"
        },
        {
            "question": "Consider the following statements and identify the correct answer using the code given below :<br/><ol><li>In a thermal power station, fuels such as oil, coal or natural gas are used to generate electricity.</li><li>Fuels are burned to heat water and turn it into steam, which goes through a turbine, which spins and turns, generating electricity.</li></ol><br/>Code :",
            "options": [
                "Statement 1 is correct but statement 2 is not correct",
                "Statement 2 is correct but statement 1 is not correct",
                "Both the statements are correct and statement 2 explains statement 1",
                "Both the statements are correct but statement 2 does not explain statement 1"
            ],
            "answer": "Both the statements are correct and statement 2 explains statement 1"
        },
        {
            "question": "Indus river basin is extended up to",
            "options": [
                "Ladakh, Jammu and Kashmir, Himachal Pradesh, Punjab",
                "Ladakh, Jammu and Kashmir, Punjab, Haryana",
                "Ladakh, Jammu and Kashmir, Punjab, Haryana, Rajasthan",
                "Ladakh, Jammu and Kashmir, Himachal Pradesh, Punjab, Haryana, Rajasthan"
            ],
            "answer": "Ladakh, Jammu and Kashmir, Himachal Pradesh, Punjab, Haryana, Rajasthan"
        },
        {
            "question": "Which one of the following statements about the Solicitor General of India (SGI) is <i>not</i> correct?",
            "options": [
                "The SGI is the Government's chief legal advisor.",
                "The SGI is the secondary law officer of the country.",
                "The post of the SGI is a constitutional post.",
                "The SGI is appointed by the Appointments Committee of the Cabinet."
            ],
            "answer": "The post of the SGI is a constitutional post."
        },
        {
            "question": "Which one of the following committees does <i>not</i> have members from the Rajya Sabha?",
            "options": [
                "The Public Accounts Committee",
                "The Committee on Public Undertakings",
                "The Estimates Committee",
                "The Committee on the Welfare of Scheduled Castes and Scheduled Tribes"
            ],
            "answer": "The Estimates Committee"
        },
        {
            "question": "Which one of the following statements about the election of the President of India is <i>not</i> correct?",
            "options": [
                "A Union Minister shall not be eligible for election as the President.",
                "The President is elected by the elected members of the Parliament and the Legislative Assemblies of States and Union Territories.",
                "The Electoral College does not include elected members of the Legislative Councils.",
                "The system of proportional representation by means of single transferable vote is followed."
            ],
            "answer": "A Union Minister shall not be eligible for election as the President."
        },
        {
            "question": "The Citizenship Act, 1955 deals with the determination of citizenship on or after",
            "options": [
                "26th January, 1950",
                "26th November, 1949",
                "15th August, 1947",
                "14th August, 1947"
            ],
            "answer": "26th January, 1950"
        },
        {
            "question": "According to the National Multi-dimensional Poverty Index (MPI) constructed by the NITI Aayog, a household is considered deprived if<br/><ol><li>a single member of the household is identified as under-nourished</li><li>the body mass index of a woman member, between 15 years and 49 years of age, is below 18.5 kg/m<sup>2</sup></li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "The titles of 'Rayagajakesari' and 'Dayagajakesari' were associated with which one of the following dynasties?",
            "options": [
                "Kakatiya",
                "Vijayanagara",
                "Gajapati",
                "Rashtrakuta"
            ],
            "answer": "Kakatiya"
        },
        {
            "question": "Name the location of the musical inscription containing groups of musical notes arranged for the benefit of his pupils by a king in the seventh or eighth century CE.",
            "options": [
                "Ennayiram",
                "Uttaramerur",
                "Siyyamangalam",
                "Kudumiyamalai"
            ],
            "answer": "Kudumiyamalai"
        },
        {
            "question": "In the context of eighteenth century India, what was 'Dastak'?",
            "options": [
                "Signature",
                "Land document",
                "Trade permit",
                "Tax on textiles"
            ],
            "answer": "Trade permit"
        },
        {
            "question": "Which one of the following was primarily associated with 'Dadni' system?",
            "options": [
                "Textile production",
                "Warfare",
                "Payment to officials",
                "Revenue collection"
            ],
            "answer": "Textile production"
        },
        {
            "question": "Consider the following statements about Kanaganahalli archaeological site :<br/><ol><li>It is situated on the bank of Bhima river.</li><li>The remains of the Kanaganahalli Stupa can be dated between 1st and 3rd centuries CE.</li><li>Emperor Ashoka's image was found at the site.</li></ol><br/>Which of the statements given above are correct?",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Which of the following statements about volcanoes are correct?<br/><ol><li>The strength of a volcano is measured by the Volcanic Explosive Index.</li><li>Iceland and Philippines were created by volcanic activity.</li><li>Volcanic soils are rich, deep and fertile and allow intensive agriculture to take place.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1, 2 and 3"
        },
        {
            "question": "Consider the following characteristics of a cloud type :<br/><ol><li>They are born through convection.</li><li>Only cloud type that can produce hail, thunder and lightning.</li><li>They are large cauliflower-shaped towers, often 'anvil tops'.</li></ol><br/>Identify the type of cloud on the basis of the given characteristics.",
            "options": [
                "Stratocumulus",
                "Cumulonimbus",
                "Cirrocumulus",
                "Nimbostratus"
            ],
            "answer": "Cumulonimbus"
        },
        {
            "question": "Meena wants to show diagrammatically how two sets of data, namely, population size and number of services are related to each other. Which one of the following will be the most suitable for the presentation?",
            "options": [
                "Pie chart",
                "Scatter graph",
                "Bar chart",
                "Triangular graph"
            ],
            "answer": "Scatter graph"
        },
        {
            "question": "Which one of the following Indian States has the longest coastline?",
            "options": [
                "Tamil Nadu",
                "Gujarat",
                "Maharashtra",
                "Andhra Pradesh"
            ],
            "answer": "Gujarat"
        },
        {
            "question": "Which of the following statements is/are correct?<br/><ol><li>Visakhapatnam Port is a land-locked harbour.</li><li>Deendayal Port is a tidal port.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 only",
                "2 only",
                "Both 1 and 2",
                "Neither 1 nor 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "There is an increase in forest cover area of India between 2011 and 2021. However, there is a decrease in forest cover area of India during the same period in",
            "options": [
                "very dense forest (canopy density of more than 70 percent)",
                "moderately dense forest (canopy density between 40-70 percent)",
                "open forest (canopy density between 10-20 percent)",
                "Both (b) and (c)"
            ],
            "answer": "moderately dense forest (canopy density between 40-70 percent)"
        },
        {
            "question": "Consider the following statements concerning the National Education Policy, 2020 :<br/><ol><li>At least 50 percent of the learners through school and higher education system to get exposure to vocational education by 2025.</li><li>Secondary schools should collaborate with ITIs, Polytechnics and local industries.</li><li>Vocational education to be exclusively provided by NGOs.</li></ol><br/>Which of the statements given above is/are correct?",
            "options": [
                "1 only",
                "1 and 2 only",
                "2 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 2 only"
        },
        {
            "question": "Which of the following sets of States is at the bottom of the Composite SDG India Index, 2020-2021 as per the NITI Aayog?",
            "options": [
                "Assam, Jharkhand, Bihar",
                "Uttar Pradesh, Jharkhand, Bihar",
                "Uttar Pradesh, Bihar, Assam",
                "Odisha, Bihar, Jharkhand"
            ],
            "answer": "Uttar Pradesh, Jharkhand, Bihar"
        },
        {
            "question": "Which one of the following is <i>not</i> a part of Article 51 of the Constitution of India?",
            "options": [
                "Promote international peace and security",
                "Maintain just and honourable relations between nations",
                "Use of UN peacekeeping force for resolution of international disputes",
                "Encourage settlement of inter-national disputes by arbitration"
            ],
            "answer": "Use of UN peacekeeping force for resolution of international disputes"
        },
        {
            "question": "Who among the following was <i>not</i> in the core leadership of the Non-Aligned Movement (NAM) in its formative phase?",
            "options": [
                "Kwame Nkrumah",
                "Gamal Abdel Nasser",
                "Jawaharlal Nehru",
                "Fidel Castro"
            ],
            "answer": "Fidel Castro"
        },
        {
            "question": "In respect to Balutedars, which of the statements given below are correct?<br/><ol><li>They were village servants and artisans.</li><li>They were employed by individual peasant family.</li><li>They existed in the Medieval Deccan and Maharashtra.</li></ol><br/>Select the correct answer using the code given below.",
            "options": [
                "1 and 2 only",
                "2 and 3 only",
                "1 and 3 only",
                "1, 2 and 3"
            ],
            "answer": "1 and 3 only"
        },
        {
            "question": "Which one of the following Viceroys was the first to officially shift his Council to Simla in summer season?",
            "options": [
                "John Lawrence",
                "Lord Dalhousie",
                "Lord Mayo",
                "William Bentinck"
            ],
            "answer": "John Lawrence"
        },
        {
            "question": "Who among the following is the author of <i>Maze Vidyapeeth</i>, the famous poem about the life of working class of Bombay?",
            "options": [
                "Narayan Surve",
                "Amol Palekar",
                "Bhalchandra Nemade",
                "Narendra Jadhav"
            ],
            "answer": "Narayan Surve"
        },
        {
            "question": "Who among the following founded the Hindu Dharma Sabha in the 19th century?",
            "options": [
                "Radhakanta Deb",
                "Ram Mohan Roy",
                "Dwarkanath Tagore",
                "Keshab Chandra Sen"
            ],
            "answer": "Radhakanta Deb"
        },
        {
            "question": "The resolution adopted by the United Nations General Assembly on 3 March, 2021 decided to celebrate the year 2023 as the International Year of",
            "options": [
                "Basic Sciences for Sustainable Development",
                "Glass",
                "Millets",
                "Camelids"
            ],
            "answer": "Millets"
        },
        {
            "question": "Karthik Meiyappan, who secured hat-trick in the ICC Men's T20 World Cup, 2022, represents",
            "options": [
                "Zimbabwe",
                "United Arab Emirates",
                "Sri Lanka",
                "Namibia"
            ],
            "answer": "United Arab Emirates"
        },
        {
            "question": "Which one of the following statements about the Wassenaar Arrangement is <i>not</i> correct?",
            "options": [
                "There are 42 participating nations in the Arrangement.",
                "It is formed primarily as a nuclear weapon overseer.",
                "India is the current Chairman of the Arrangement.",
                "India joined the Arrangement in the year 2017."
            ],
            "answer": "It is formed primarily as a nuclear weapon overseer."
        },
        {
            "question": "Who among the following is known as 'Payyoli Express'?",
            "options": [
                "Hima Das",
                "Dutee Chand",
                "P. T. Usha",
                "Shiny Abraham"
            ],
            "answer": "P. T. Usha"
        },
        {
            "question": "Match List-I with List-II relating to Sahitya Akademi Award Winners, 2022 and select the correct answer using the code given below the Lists :<br/><br/><table><tr><th>List-I (Title and Genre)</th><th>List-II (Author)</th></tr><tr><td>A. Bhool Satya (Short Stories)</td><td>1. Kamal Ranga</td></tr><tr><td>B. Tumadi Ke Shabd (Poetry)</td><td>2. Veena Gupta</td></tr><tr><td>C. Chhe Roopak (Drama)</td><td>3. Badri Narayan</td></tr><tr><td>D. Alekhun Amba (Play)</td><td>4. Manoj Kumar Goswami</td></tr></table><br/>Code :",
            "options": [
                "A-1, B-2, C-3, D-4",
                "A-1, B-3, C-2, D-4",
                "A-4, B-3, C-2, D-1",
                "A-4, B-2, C-3, D-1"
            ],
            "answer": "A-4, B-3, C-2, D-1"
        }
    ]
};

export default gkData;
