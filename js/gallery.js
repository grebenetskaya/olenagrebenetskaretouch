document.addEventListener("DOMContentLoaded", () => {
  const ALL_IMAGES = [
    "img/Hair_Editorial-5120.jpg",
    "img/IMAGE 1.jpg",
    "img/B90A3828.jpg",
    "img/Alora_Luca_Watch_Set_028 1 1.jpg",
    "img/B0010763.jpg",
    "img/REMEDY_H.F.L-80.jpg",
    "img/Hanimanns-3.jpg",
    "img/ANEMOS_H.F.L-5.jpg",
    "img/updated250526_01_0200.jpg",
    "img/20240315_SALTSTONE_SSBODYMISTLS_1025.jpg",
    "img/BAMBAH_RAMADAN225856.jpg",
    "img/Jordan 4_retouch.jpg",
    "img/FAITHFUL_H.F.L-4-17.jpg",
    "img/KIT+ACE_H.F.L-118.jpg",
    "img/Copy of Web_HQ-0336_1.jpg",
    "img/05282025_SY_AK6367.jpg",
    "img/PSS_H.F.L-117.jpg",
    "img/IMG_8418.jpg",
    "img/DIM03638.jpg",
    "img/5M4A1297 копия.jpg",
    "img/PALO_H.F.L-94.jpg",
    "img/CIAO_H.F.L-21.jpg",
    "img/SAS_NEROLIANDBASIL_20250326_LOOK04_0781_R2.jpg",
    "img/FA8A2438 копия 3.jpg",
    "img/CIAO_H.F.L-213.jpg",
    "img/Grimoire_Group_Shelf-01_W1a_(Flattened).jpg",
    "img/XM_LAUNDRYSCENE_C_0221.jpg",
    "img/untitled-390.jpg",
    "img/FD_H.F.L-32.jpg",
    "img/DIM03236.jpg",
    "img/_DSC9547.jpg",
    "img/2021_06_14_EUCERIN_ColorCode_02_Cecilia_Rooftop_0117.jpg",
    "img/loulou301.jpg",
    "img/250320_HFL_NEMAH1944.jpg",
    "img/RONI3034.jpg",
    "img/54179-1-0010 копия.jpg",
    "img/MALBON_H.F.L-178.jpg"
  ];

  const SERIES = {
    look0: [
      "img/look0/Hair_Editorial-5120.jpg",
      "img/look0/Hair_Editorial-002.jpg",
      "img/look0/Hair_Editorial-4576.jpg",
      "img/look0/Hair_Editorial-4729.jpg",
      "img/look0/Hair_Editorial-4829.jpg",
      "img/look0/Hair_Editorial-4966.jpg",
      "img/look0/Hair_Editorial-5120.jpg"
    ],
    look1: [
      "img/look1/IMAGE 1.jpg",
      "img/look1/022224_OSEA_GGBS-SET-45-EditV1 (3).jpg",
      "img/look1/052623_OSEA_EssentialHydratingOil_EHO-1-6-EditV2 (2).jpg",
      "img/look1/082223_OSEA_AntiAgingBodyBalm_B-BALM-295-17-EditV2 (1).jpg"
    ],
    look2: [
      "img/look2/B90A3828.jpg",
      "img/look2/B90A3850_1.jpg",
      "img/look2/B90A3877_1.jpg",
      "img/look2/B90A4101.jpg",
      "img/look2/B90A6816.jpg",
      "img/look2/SHASHI0034.jpg",
      "img/look2/SHASHI_H.F.L-2.jpg",
      "img/look2/SHASHI_H.F.L-7.jpg"
    ],
    look3: [
      "img/look3/Alora_Luca_Watch_Set_028 1 1.jpg",
      "img/look3/Alura_Set_023.jpg",
      "img/look3/Big_Bag_Navy_002.jpg",
      "img/look3/Ramona_Set_049.jpg"
    ],
    look4: [
      "img/look4/B0010763.jpg",
      "img/look4/B0010652.jpg",
      "img/look4/B0010768.jpg",
      "img/look4/B0010830.jpg",
      "img/look4/B0010836.jpg",
      "img/look4/B0010896.jpg",
      "img/look4/B0010913.jpg",
      "img/look4/B0010923.jpg",
      "img/look4/B0010944.jpg",
      "img/look4/B0010961.jpg"
    ],
    look5: [
      "img/look5/REMEDY_H.F.L-80.jpg",
      "img/look5/REMEDY_H.F.L-5.jpg",
      "img/look5/REMEDY_H.F.L-9.jpg",
      "img/look5/REMEDY_H.F.L-93.jpg",
      "img/look5/REMEDY_H.F.L-102.jpg"
    ],
    look6: [
      "img/look6/Hanimanns-3.jpg",
      "img/look6/Hanimanns-1 копия.jpg",
      "img/look6/Hanimanns-2.jpg"
    ],
    look7: [
      "img/look7/ANEMOS_H.F.L-5.jpg",
      "img/look7/ANEMOS_H.F.L-1.jpg",
      "img/look7/ANEMOS_H.F.L-28.jpg",
      "img/look7/ANEMOS_H.F.L-75.jpg",
      "img/look7/CIAO_H.F.L-22.jpg",
      "img/look7/CIAO_H.F.L-27.jpg",
      "img/look7/CIAO_H.F.L-56.jpg"
    ],
    look8: [
      "img/look8/updated250526_01_0200.jpg",
      "img/look8/250526_11_2477 копия.jpg",
      "img/look8/250526_11_2535 копия.jpg",
      "img/look8/updated250526_05_1167 копия.jpg",
      "img/look8/updated250526_08_2061 копия.jpg",
    ],
    look9: [
      "img/look9/20240315_SALTSTONE_SSBODYMISTLS_1025.jpg",
      "img/look9/20240315_SALTSTONE_SSBODYMISTLS_0721.jpg",
      "img/look9/20240315_SALTSTONE_SSBODYMISTLS_0890.jpg",
      "img/look9/20240315_SALTSTONE_SSBODYMISTLS_1122.jpg",
      "img/look9/20240315_SALTSTONE_SSBODYMISTLS_1354.jpg"
    ],
    look10: [
      "img/look10/BAMBAH_RAMADAN225856.jpg",
      "img/look10/BAMBAH_RAMADAN229506 копия 2.jpg",
      "img/look10/BAMBAH_RAMADAN229992 копия.jpg",
      "img/look10/BAMBAH_RAMADAN2210066 копия.jpg"
    ],
    look11: [
      "img/look11/Jordan 4_retouch.jpg",
      "img/look11/Eryk 2_Retouched File копия.jpg",
      "img/look11/Jordan 2_retouch копия.jpg",
      "img/look11/Jordan 5_retouch копия.jpg",
      "img/look11/Jordan 6_retouch копия.jpg"
    ],
    look12: [
      "img/look12/FAITHFUL_H.F.L-4-17.jpg",
      "img/look12/FAITHFUL_H.F.L-2-9.jpg",
      "img/look12/FAITHFUL_H.F.L-4-4.jpg",
      "img/look12/FAITHFUL_H.F.L-8-2.jpg",
      "img/look12/FAITHFUL_H.F.L-23-9.jpg",
      "img/look12/FAITHFUL_H.F.L-23-29.jpg"
    ],
    look13: [
      "img/look13/KIT+ACE_H.F.L-118.jpg",
      "img/look13/KIT+ACE.0142.jpg",
      "img/look13/KIT+ACE.0637.jpg",
      "img/look13/KIT+ACE.2304.jpg",
      "img/look13/KIT+ACE.2571.jpg",
      "img/look13/KIT+ACE.2804.jpg"
    ],
    look14: [
      "img/look14/Copy of Web_HQ-0336_1.jpg",
      "img/look14/Copy of Web_HQ-0241_1.jpg",
      "img/look14/Copy of Web_HQ-0272_1.jpg",
      "img/look14/Copy of Web_HQ-0370_1.jpg",
      "img/look14/Copy of Web_HQ-0390_1 копия.jpg",
      "img/look14/Copy of Web_HQ-0449_1.jpg"
    ],
    look15: [
      "img/look15/05282025_SY_AK6367.jpg",
      "img/look15/05282025_SY_AK4682.jpg",
      "img/look15/05282025_SY_AK4891 копия.jpg",
      "img/look15/05282025_SY_AK5931 копия.jpg",
    ],
    look16: [
      "img/look16/PSS_H.F.L-117.jpg",
      "img/look16/PSS_H.F.L-14.jpg",
      "img/look16/PSS_H.F.L-18.jpg",
      "img/look16/PSS_H.F.L-32.jpg",
      "img/look16/PSS_H.F.L-64.jpg",
      "img/look16/PSS_H.F.L-91.jpg"
    ],
    look17: [
      "img/look17/IMG_8418.jpg",
      "img/look17/IMG_8032print копия.jpg",
      "img/look17/IMG_8172_FINAl2 копия.jpg",
      "img/look17/IMG_8216 копия.jpg",
      "img/look17/IMG_8442 копия.jpg",
      "img/look17/IMG_8617 копия.jpg",
    ],
    look18: [
      "img/look18/DIM03638.jpg",
      "img/look18/DIM03747 копия.jpg",
      "img/look18/DIM03754print2 копия.jpg",
      "img/look18/DIM03818print2 копия.jpg",
      "img/look18/DIM03964 копия.jpg"
    ],
    look19: [
      "img/look19/5M4A1297 копия.jpg",
      "img/look19/5M4A1072 копия.jpg",
      "img/look19/5M4A1191 копия.jpg",
      "img/look19/5M4A1305 копия.jpg"
    ],
    look20: [
      "img/look20/PALO_H.F.L-94.jpg",
      "img/look20/Palo-03.jpg",
      "img/look20/Palo-16.jpg",
      "img/look20/Palo-19.jpg",
      "img/look20/PALO_H.F.L-131.jpg",
      "img/look20/PALO_H.F.L-149.jpg"
    ],
    look21: [
      "img/look21/SAS_NEROLIANDBASIL_20250326_LOOK04_0781_R2..jpg",
      "img/look21/SAS_NEROLIANDBASIL_20250326_LOOK03_0610_R2..jpg",
      "img/look21/SAS_NEROLIANDBASIL_20250326_LOOK04_0724_R2..jpg",
      "img/look21/SAS_NEROLIANDBASIL_20250326_LOOK07_0915_R2..jpg",
      "img/look21/SAS_NEROLIANDBASIL_20250326_LOOK07_0919_R2..jpg",
    ],
    look22: [
      "img/look22/FA8A2438 копия 3.jpg",
      "img/look22/FA8A2641 копия 2.jpg",
      "img/look22/FA8A2815 — копия 4.jpg",
      "img/look22/FA8A2928.jpg_2 копия 2.jpg",
    ],
    look23: [
      "img/look23/CIAO_H.F.L-213.jpg",
      "img/look23/CIAO_H.F.L-20  — копия.jpg",
      "img/look23/CIAO_H.F.L-232 — копия.jpg",
      "img/look23/CIAO_H.F.L-235.jpg",
    ],
    look24: [
      "img/look24/Grimoire_Group_Shelf-01_W1a_(Flattened).jpg",
      "img/look24/Grimoire_BGuise-VMonday_Basement-Vanity_01_W1a_(Flattened).jpg",
      "img/look24/Grimoire_Vanity-Monday_Stack-01_W1a_(Flattened).jpg",
      "img/look24/Grimpore_4-Square-Group-01_W1a_(Flattened).jpg"
    ],
    look25: [
      "img/look25/XM_LAUNDRYSCENE_C_0221.jpg",
      "img/look25/MILKFAMILY_PRODUCT_1307.jpg",
      "img/look25/XM_EMBRACE_PRODUCT_1260.jpg",
      "img/look25/XM_LAUNDRYSCENE_CA_0459.jpg",
      "img/look25/XM_LAUNDRYSCENE_PRODUCT_0548.jpg"
    ],
    look26: [
      "img/look26/untitled-390.jpg",
      "img/look26/untitled-622-22561-22562-22563 1.jpg",
      "img/look26/untitled-664_1 копия.jpg"
    ],
    look27: [
      "img/look27/DIM03236.jpg",
      "img/look27/DIM03167print копия.jpg",
      "img/look27/DIM03251 копия.jpg",
      "img/look27/DIM03395 копия.jpg",
      "img/look27/DIM03432print копия.jpg",
      "img/look27/DIM03508print копия.jpg"
    ],
    look28: [
      "img/look28/_DSC9547.jpg",
      "img/look28/_DSC9465 копия.jpg",
      "img/look28/_DSC9912.psd_2.jpg"
    ],
    look29: [
      "img/look29/2021_06_14_EUCERIN_ColorCode_02_Cecilia_Rooftop_0117.jpg",
      "img/look29/2021_06_14_EUCERIN_ColorCode_05_Cecila_Coverage_0076.jpg",
      "img/look29/2021_06_14_EUCERIN_ColorCode_06_Cecilia_Mariana_0075.jpg"
    ],
    look30: [
      "img/look30/loulou301.jpg",
      "img/look30/loulou300 копия.jpg",
      "img/look30/loulou302.jpg",
      "img/look30/loulou303.jpg",
      "img/look30/loulou304 копия.jpg",
    ],
    look31: [
      "img/look31/250320_HFL_NEMAH1944.jpg",
      "img/look31/250320_HFL_NEMAH1474.jpg",
      "img/look31/250320_HFL_NEMAH1955.jpg",
      "img/look31/250320_HFL_NEMAH2028.jpg",
      "img/look31/NEMAH_H.F.L-13.jpg",
      "img/look31/NEMAH_H.F.L-29.jpg"
    ],
    look32: [
      "img/look32/RONI3034.jpg",
      "img/look32/RONI1833 копия.jpg",
      "img/look32/RONI1899 копия.jpg",
      "img/look32/RONI2260.jpg",
      "img/look32/RONI2776.jpg",
    ],
    look33: [
      "img/look33/FD_H.F.L-32.jpg",
      "img/look33/FRIDAY.DEPLOYS.0285 копия.jpg",
      "img/look33/FRIDAY.DEPLOYS.0528 копия.jpg",
      "img/look33/FRIDAY.DEPLOYS.0861 копия.jpg",
      "img/look33/FRIDAY.DEPLOYS.1109 копия.jpg"
    ],
    look34: [
      "img/look34/CIAO_H.F.L-21.jpg",
      "img/look34/CIAO_H.F.L-41.jpg",
      "img/look34/CIAO_H.F.L-63.jpg",
      "img/look34/CIAO_H.F.L-133.jpg",
      "img/look34/CIAO_H.F.L-165.jpg",
    ],
    look35 : [
      "img/look35/54179-1-0010 копия.jpg",
      "img/look35/54179-7-0003 копия.jpg",
      "img/look35/54179-10-0012 копия.jpg",
      "img/look35/54179-12-0011 копия.jpg",
      "img/look35/54179-15-0012 копия.jpg",
      "img/look35/54179-18-0002.jpg",
    ],
    look36 : [
      "img/look36/MALBON_H.F.L-178.jpg",
      "img/look36/MALBON_H.F.L-143.jpg",
      "img/look36/MALBON_H.F.L-198.jpg",
      "img/look36/MALBON_H.F.L-317.jpg",
      "img/look36/MALBON_H.F.L-397.jpg",
    ]
  };


  const imgEl   = document.getElementById("viewer-img");
  const btnPrev = document.getElementById("prev");
  const btnNext = document.getElementById("next");
  const closeBtn = document.getElementById("close");

  if (!imgEl || !btnPrev || !btnNext) {
    console.warn("Галерейні елементи не знайдені на сторінці.");
  } else {
    const params = new URLSearchParams(window.location.search);
    const seriesKey = params.get("series");           // напр. "look12"
    let index = parseInt(params.get("img") || "0", 10);


    const currentList = (seriesKey && SERIES[seriesKey] && SERIES[seriesKey].length)
      ? SERIES[seriesKey]
      : ALL_IMAGES;

    function wrap(i) {
      if (i < 0) return currentList.length - 1;
      if (i >= currentList.length) return 0;
      return i;
    }

    function show(i) {
      index = wrap(i);
      imgEl.src = currentList[index];
    }

    btnPrev.addEventListener("click", (e) => {
      e.preventDefault();
      show(index - 1);
    });

    btnNext.addEventListener("click", (e) => {
      e.preventDefault();
      show(index + 1);
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft")  { e.preventDefault(); show(index - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); }
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        window.location.href = "index.html";
      }
    });


    show(index);
  }})
