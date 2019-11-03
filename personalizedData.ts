export default [
  {
    age: 18,
    gender: "female",
    condition_id: "32",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 19517,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "32"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.men.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "154"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "106"
                      }
                    }
                  }
                },
                { text: { type: "appString", value: "ptt.tests.tldr.none" } },
                {
                  id: 2,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "32",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.two",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.days.lowercase"
                      },
                      second: {
                        type: "appString",
                        value: "ptt.common.weeks.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "32"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [{ code: "154" }, { code: "106" }],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.111" },
            { type: "appString", value: "ptt.seek_further_care.130" },
            { type: "appString", value: "ptt.seek_further_care.51" }
          ],
          type: "symptom"
        },
        {
          type: "treatment",
          specializations: [{ code: "58", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Dentist__ to diagnose and/or treat their __Dental Infection/Abscess__.",
          medications: [
            { code: "J01CA04", percentages: 60, prescription: false },
            { code: "J01CR02", percentages: 10, prescription: false },
            { code: "J01FA09", percentages: 10, prescription: false },
            { code: "M01AE01", percentages: 10, prescription: false },
            { code: "M01AE02", percentages: 10, prescription: false }
          ],
          noMeds: null
        },
        { type: "recovery", range: [1, 2], position: 1.5 }
      ],
      plm: 19517,
      conditionId: "32"
    }
  },
  {
    age: 18,
    gender: "male",
    condition_id: "33",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 47154,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "33"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.women.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "28"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "65"
                      }
                    }
                  }
                },
                { text: { type: "appString", value: "ptt.tests.tldr.none" } },
                {
                  id: 2,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "33",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.two",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.days.lowercase"
                      },
                      second: {
                        type: "appString",
                        value: "ptt.common.weeks.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "33"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [{ code: "28" }, { code: "65" }],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.68" },
            { type: "appString", value: "ptt.seek_further_care.81" },
            { type: "appString", value: "ptt.seek_further_care.32" },
            { type: "appString", value: "ptt.seek_further_care.51" }
          ],
          type: "symptom"
        },
        {
          type: "treatment",
          specializations: [{ code: "10", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Primary Care Physician__ to diagnose and/or treat their __Otitis Externa__.",
          medications: [
            { code: "S02AA10", percentages: 25, prescription: false },
            { code: "S02AA07", percentages: 25, prescription: false },
            { code: "S02AA16", percentages: 25, prescription: false },
            { code: "S02CA03", percentages: 25, prescription: false }
          ],
          noMeds: null
        },
        { type: "recovery", range: [1, 2], position: 1.5 }
      ],
      plm: 47154,
      conditionId: "33"
    }
  },
  {
    age: 18,
    gender: "female",
    condition_id: "33",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 41989,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "33"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.men.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "28"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "65"
                      }
                    }
                  }
                },
                { text: { type: "appString", value: "ptt.tests.tldr.none" } },
                {
                  id: 2,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "33",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.two",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.days.lowercase"
                      },
                      second: {
                        type: "appString",
                        value: "ptt.common.weeks.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "33"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [{ code: "28" }, { code: "65" }],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.68" },
            { type: "appString", value: "ptt.seek_further_care.81" },
            { type: "appString", value: "ptt.seek_further_care.32" },
            { type: "appString", value: "ptt.seek_further_care.51" }
          ],
          type: "symptom"
        },
        {
          type: "treatment",
          specializations: [{ code: "10", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Primary Care Physician__ to diagnose and/or treat their __Otitis Externa__.",
          medications: [
            { code: "S02AA10", percentages: 25, prescription: false },
            { code: "S02AA07", percentages: 25, prescription: false },
            { code: "S02AA16", percentages: 25, prescription: false },
            { code: "S02CA03", percentages: 25, prescription: false }
          ],
          noMeds: null
        },
        { type: "recovery", range: [1, 2], position: 1.5 }
      ],
      plm: 41989,
      conditionId: "33"
    }
  },
  {
    age: 18,
    gender: "male",
    condition_id: "34",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 34395,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "34"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.women.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "163"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "28"
                      }
                    }
                  }
                },
                { text: { type: "appString", value: "ptt.tests.tldr.none" } },
                {
                  id: 2,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "34",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.one",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.lifetime.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "34"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [
            { code: "163" },
            { code: "28" },
            { code: "240" },
            { code: "12" },
            { code: "164" }
          ],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.51" },
            { type: "appString", value: "ptt.seek_further_care.129" },
            { type: "appString", value: "ptt.seek_further_care.103" }
          ],
          type: "symptom"
        },
        {
          type: "treatment",
          specializations: [{ code: "10", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Primary Care Physician__ to diagnose and/or treat their __Temporomandibular Joint Dysfunction (TMJ)__.",
          medications: [
            { code: "M01AE01", percentages: 40, prescription: false },
            { code: "M01AE02", percentages: 30, prescription: false },
            { code: "N02BE01", percentages: 30, prescription: false }
          ],
          noMeds: 60
        },
        { type: "recovery", range: [5], position: 5 }
      ],
      plm: 34395,
      conditionId: "34"
    }
  },
  {
    age: 18,
    gender: "female",
    condition_id: "34",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 13809,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "34"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.men.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "163"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "28"
                      }
                    }
                  }
                },
                { text: { type: "appString", value: "ptt.tests.tldr.none" } },
                {
                  id: 2,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "34",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.one",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.lifetime.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "34"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [
            { code: "163" },
            { code: "28" },
            { code: "240" },
            { code: "12" },
            { code: "164" }
          ],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.51" },
            { type: "appString", value: "ptt.seek_further_care.129" },
            { type: "appString", value: "ptt.seek_further_care.103" }
          ],
          type: "symptom"
        },
        {
          type: "treatment",
          specializations: [{ code: "10", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Primary Care Physician__ to diagnose and/or treat their __Temporomandibular Joint Dysfunction (TMJ)__.",
          medications: [
            { code: "M01AE01", percentages: 40, prescription: false },
            { code: "M01AE02", percentages: 30, prescription: false },
            { code: "N02BE01", percentages: 30, prescription: false }
          ],
          noMeds: 60
        },
        { type: "recovery", range: [5], position: 5 }
      ],
      plm: 13809,
      conditionId: "34"
    }
  },
  {
    age: 18,
    gender: "male",
    condition_id: "35",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 4307,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "35"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.women.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "167"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "168"
                      }
                    }
                  }
                },
                { text: { type: "appString", value: "ptt.tests.tldr.none" } },
                {
                  id: 2,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "35",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.two",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.days.lowercase"
                      },
                      second: {
                        type: "appString",
                        value: "ptt.common.weeks.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "35"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [{ code: "167" }, { code: "168" }],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.130" },
            { type: "appString", value: "ptt.seek_further_care.51" },
            { type: "appString", value: "ptt.seek_further_care.16" },
            { type: "appString", value: "ptt.seek_further_care.28" }
          ],
          type: "symptom"
        },
        {
          type: "treatment",
          specializations: [{ code: "10", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Primary Care Physician__ to diagnose and/or treat their __Parotitis__.",
          medications: [
            { code: "J01CF04", percentages: 75, prescription: false },
            { code: "J01AA02", percentages: 25, prescription: false }
          ],
          noMeds: null
        },
        { type: "recovery", range: [1, 2], position: 1.5 }
      ],
      plm: 4307,
      conditionId: "35"
    }
  },
  {
    age: 18,
    gender: "female",
    condition_id: "35",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 2932,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "35"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.men.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "167"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "168"
                      }
                    }
                  }
                },
                { text: { type: "appString", value: "ptt.tests.tldr.none" } },
                {
                  id: 2,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "35",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.two",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.days.lowercase"
                      },
                      second: {
                        type: "appString",
                        value: "ptt.common.weeks.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "35"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [{ code: "167" }, { code: "168" }],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.130" },
            { type: "appString", value: "ptt.seek_further_care.51" },
            { type: "appString", value: "ptt.seek_further_care.16" },
            { type: "appString", value: "ptt.seek_further_care.28" }
          ],
          type: "symptom"
        },
        {
          type: "treatment",
          specializations: [{ code: "10", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Primary Care Physician__ to diagnose and/or treat their __Parotitis__.",
          medications: [
            { code: "J01CF04", percentages: 75, prescription: false },
            { code: "J01AA02", percentages: 25, prescription: false }
          ],
          noMeds: null
        },
        { type: "recovery", range: [1, 2], position: 1.5 }
      ],
      plm: 2932,
      conditionId: "35"
    }
  },
  {
    age: 18,
    gender: "male",
    condition_id: "36",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 4400,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "36"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.women.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "66"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "43"
                      }
                    }
                  }
                },
                {
                  id: 2,
                  text: {
                    type: "appString",
                    value: "ptt.tests.tldr.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "tests",
                        value: "100023"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "tests",
                        value: "100001"
                      }
                    }
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "36",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 4,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.one",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.lifetime.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "36"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [
            { code: "66" },
            { code: "43" },
            { code: "29" },
            { code: "180" },
            { code: "157" }
          ],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.108" },
            { type: "appString", value: "ptt.seek_further_care.76" },
            { type: "appString", value: "ptt.seek_further_care.36" },
            { type: "appString", value: "ptt.seek_further_care.128" }
          ],
          type: "symptom"
        },
        {
          type: "test",
          labs: [
            {
              code: "100023",
              type: "numeric",
              priority: 1,
              lowVal: 0.0,
              highVal: 14.0,
              expectedResult: "above",
              units: "IU/ml",
              category: "lab"
            },
            {
              code: "100001",
              type: "numeric",
              priority: 2,
              lowVal: 0.0,
              highVal: 20.0,
              expectedResult: "above",
              units: "Units",
              category: "lab"
            }
          ],
          imaging: [],
          procedures: []
        },
        {
          type: "treatment",
          specializations: [{ code: "10", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Primary Care Physician__ to diagnose and/or treat their __Rheumatoid Arthritis__, and were in some cases referred to __a Rheumatologist__.",
          medications: [
            { code: "L04AX03", percentages: 20, prescription: false },
            { code: "L04AB04", percentages: 20, prescription: false },
            { code: "P01BA02", percentages: 20, prescription: false },
            { code: "A07EC01", percentages: 10, prescription: false },
            { code: "M01AE01", percentages: 10, prescription: false },
            { code: "other", percentages: 20 }
          ],
          noMeds: null
        },
        { type: "recovery", range: [5], position: 5 }
      ],
      plm: 4400,
      conditionId: "36"
    }
  },
  {
    age: 18,
    gender: "female",
    condition_id: "36",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 1459,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "36"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.men.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "66"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "43"
                      }
                    }
                  }
                },
                {
                  id: 2,
                  text: {
                    type: "appString",
                    value: "ptt.tests.tldr.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "tests",
                        value: "100023"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "tests",
                        value: "100001"
                      }
                    }
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "36",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 4,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.one",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.lifetime.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "36"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [
            { code: "66" },
            { code: "43" },
            { code: "29" },
            { code: "180" },
            { code: "157" }
          ],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.108" },
            { type: "appString", value: "ptt.seek_further_care.76" },
            { type: "appString", value: "ptt.seek_further_care.36" },
            { type: "appString", value: "ptt.seek_further_care.128" }
          ],
          type: "symptom"
        },
        {
          type: "test",
          labs: [
            {
              code: "100023",
              type: "numeric",
              priority: 1,
              lowVal: 0.0,
              highVal: 14.0,
              expectedResult: "above",
              units: "IU/ml",
              category: "lab"
            },
            {
              code: "100001",
              type: "numeric",
              priority: 2,
              lowVal: 0.0,
              highVal: 20.0,
              expectedResult: "above",
              units: "Units",
              category: "lab"
            }
          ],
          imaging: [],
          procedures: []
        },
        {
          type: "treatment",
          specializations: [{ code: "10", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Primary Care Physician__ to diagnose and/or treat their __Rheumatoid Arthritis__, and were in some cases referred to __a Rheumatologist__.",
          medications: [
            { code: "L04AX03", percentages: 20, prescription: false },
            { code: "L04AB04", percentages: 20, prescription: false },
            { code: "P01BA02", percentages: 20, prescription: false },
            { code: "A07EC01", percentages: 10, prescription: false },
            { code: "M01AE01", percentages: 10, prescription: false },
            { code: "other", percentages: 20 }
          ],
          noMeds: null
        },
        { type: "recovery", range: [5], position: 5 }
      ],
      plm: 1459,
      conditionId: "36"
    }
  },
  {
    age: 18,
    gender: "male",
    condition_id: "37",
    data: {
      results: [
        {
          type: "menu",
          components: [
            {
              type: "text",
              value: {
                type: "appString",
                value: "ptt.menu.intro",
                variables: {
                  plm: 28454,
                  age: "15 - 21",
                  condition: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "37"
                  },
                  gender: {
                    type: "appString",
                    value: "common.gender.women.lowercase"
                  }
                }
              }
            },
            {
              type: "tldr",
              content: [
                {
                  id: 1,
                  text: {
                    type: "appString",
                    value: "ptt.symptoms.tldr.potential.two",
                    variables: {
                      first: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "223"
                      },
                      second: {
                        type: "shortCode",
                        shortCodeType: "symptom",
                        value: "156"
                      }
                    }
                  }
                },
                { text: { type: "appString", value: "ptt.tests.tldr.none" } },
                {
                  id: 2,
                  text: {
                    type: "shortCode",
                    shortCodeType: "condition",
                    value: "37",
                    field: "treatment_summary"
                  }
                },
                {
                  id: 3,
                  text: {
                    type: "appString",
                    value: "ptt.recovery.tldr.two",
                    variables: {
                      first: {
                        type: "appString",
                        value: "ptt.common.weeks.lowercase"
                      },
                      second: {
                        type: "appString",
                        value: "ptt.common.months.lowercase"
                      },
                      condition: {
                        type: "shortCode",
                        shortCodeType: "condition",
                        value: "37"
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          potentialSymptoms: [{ code: "223" }, { code: "156" }],
          concerningSymptoms: [
            { type: "appString", value: "ptt.seek_further_care.104" },
            { type: "appString", value: "ptt.seek_further_care.66" },
            { type: "appString", value: "ptt.seek_further_care.35" }
          ],
          type: "symptom"
        },
        {
          type: "treatment",
          specializations: [{ code: "13", percentages: 100 }],
          specializationsDisplay:
            "Most people like you saw __a Orthopedic Surgeon__ to diagnose and/or treat their __Plantar Fasciitis__.",
          medications: [
            { code: "M01AE01", percentages: 40, prescription: false },
            { code: "M01AE02", percentages: 40, prescription: false },
            { code: "N02BE01", percentages: 20, prescription: false }
          ],
          noMeds: 90
        },
        { type: "recovery", range: [2, 3], position: 2.5 }
      ],
      plm: 28454,
      conditionId: "37"
    }
  }
];
