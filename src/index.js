// TEST:   npm run start
// DEPLOY: npm run deploy
//

import ReactDOM from "react-dom/client";
import React from 'react';

import { HashRouter, Routes, Route } from "react-router-dom";


import "index.css"

// ======================
// ===   META PAGES   ===
// ======================

import HEADER from "./pages/header";
import FOOTER from "./pages/footer";

import HOME from "./pages/home";
import ABOUT from "./pages/about";
import NOPAGE from "./pages/nopage";
import SMBX38A from "./pages/smbx38a";
import SMBX2 from "./pages/smbx2";
import DSM from "./pages/dsm"
import HEALTH from "./pages/health"
import OTHER from "./pages/other"


// ======================
// ===     SMBX2      ===
// ======================


import SMBX2_AMPED_JEWELS                               from "./pages/smbx2/amped_jewels"
import SMBX2_A_WORLD_WITHOUT_COLOR                      from "./pages/smbx2/a_world_without_color"
import SMBX2_BALLOONS                                   from "./pages/smbx2/balloons"
import SMBX2_BINOCULARS                                 from "./pages/smbx2/binoculars"
import SMBX2_BOING                                      from "./pages/smbx2/boing"
import SMBX2_BOOMSHELL_KOOPA                            from "./pages/smbx2/boomshell_koopa"
import SMBX2_BOWSER_CASTLE                              from "./pages/smbx2/bowser_castle"
import SMBX2_BUTTON                                     from "./pages/smbx2/button"
import SMBX2_GLACIER_GLADE                              from "./pages/smbx2/glacier_glade"
import SMBX2_HANDY_TORCH                                from "./pages/smbx2/handy_torch"
import SMBX2_HOLES                                      from "./pages/smbx2/holes"
import SMBX2_IN_THE_HALLS_OF_THE_HOTEL_KING             from "./pages/smbx2/in_the_halls_of_the_hotel_king"
import SMBX2_LECTERN                                    from "./pages/smbx2/lectern"
import SMBX2_LEVER                                      from "./pages/smbx2/lever"
import SMBX2_MY_EYES_SHINE_BRIGHT_WITH_THE_CITY_LIGHTS  from "./pages/smbx2/my_eyes_shine_bright_with_the_city_lights"
import SMBX2_NECKYS                                     from "./pages/smbx2/neckys"
import SMBX2_PLAIN_PLAIN                                from "./pages/smbx2/plain_plain"
import SMBX2_READ_ME_SIGN                               from "./pages/smbx2/read_me_sign"
import SMBX2_REDSTONE                                   from "./pages/smbx2/redstone"
import SMBX2_REDSTONE_TEST_WORLD                        from "./pages/smbx2/redstone_test_world"
import SMBX2_SPYBLOCKS                                  from "./pages/smbx2/spyblocks"
import SMBX2_TESLA_COILS                                from "./pages/smbx2/tesla_coils"
import SMBX2_WARPHUBS                                   from "./pages/smbx2/warphubs"


// ======================
// ===    SMBX38A     ===
// ======================


import SMBX38A_CLOUDY_MOUNTAINS               from "./pages/smbx38a/cloudy_mountains"
import SMBX38A_COLOR                          from "./pages/smbx38a/color"
import SMBX38A_CUSTOM_CHEATS                  from "./pages/smbx38a/custom_cheats"
import SMBX38A_CUSTOM_CREDITS                 from "./pages/smbx38a/custom_credits"
import SMBX38A_EXISTENTIAL_CRISIS             from "./pages/smbx38a/existential_crisis"
import SMBX38A_FADED_BLOCKS                   from "./pages/smbx38a/faded_blocks"
import SMBX38A_PARRALLAXX                     from "./pages/smbx38a/parrallaxx"
import SMBX38A_THE_GREAT_SMBX_38A_CONTEST_I   from "./pages/smbx38a/the_great_smbx_38a_contest_i"
import SMBX38A_THE_GREAT_SMBX_38A_CONTEST_II  from "./pages/smbx38a/the_great_smbx_38a_contest_ii"
import SMBX38A_XYZ                            from "./pages/smbx38a/xyz"
import SMBX38A_YING_YANG                      from "./pages/smbx38a/ying_yang"


// ======================
// ===      DSM       ===
// ======================



import DSM_NEURODEVELOPMENT_DISORDER_INTELLECTUAL_DISABILITY from "./pages/dsm/neurodevelopmental_disorders/intellectual_disability"
import DSM_NEURODEVELOPMENT_DISORDER_GLOBAL_DEVELOPMENT_DELAY from "./pages/dsm/neurodevelopmental_disorders/global_development_delay"
import DSM_UNSPECIFIED_INTELLECTUAL_DEVELOPMENTAL_DISORDER from "./pages/dsm/neurodevelopmental_disorders/unspecified_intellectual_developmental_disorder"
import DSM_LANGUAGE_DISORDER from "./pages/dsm/neurodevelopmental_disorders/language_disorder"
import DSM_SPEECH_SOUND_DISORDER from "./pages/dsm/neurodevelopmental_disorders/speech_sound_disorder"
import DSM_CHILDHOOD_ONSET_FLUENCY_DISORDER from "./pages/dsm/neurodevelopmental_disorders/childhood_onset_fluency_disorder"
import DSM_SOCIAL_COMMUNICATION_DISORDER from "./pages/dsm/neurodevelopmental_disorders/social_communication_disorder"
import DSM_UNSPECIFIED_COMMUNICATION_DISORDER from "./pages/dsm/neurodevelopmental_disorders/unspecified_communication_disorder"
import DSM_AUTISM_SPECTRUM_DISORDER from "./pages/dsm/neurodevelopmental_disorders/autism_spectrum_disorder"
import DSM_ATTENTION_DEFICIT_HYPERACTIVITY_DISORDER from "./pages/dsm/neurodevelopmental_disorders/attention_deficit_hyperactivity_disorder"
import DSM_OTHER_SPECIFIED_ATTENTION_DEFICIT_HYPERACTIVITY_DISORDER from "./pages/dsm/neurodevelopmental_disorders/other_specified_attention_deficit_hyperactivity_disorder"
import DSM_UNSPECIFIED_ATTENTION_DEFICIT_HYPERACTIVITY_DISORDER from "./pages/dsm/neurodevelopmental_disorders/unspecified_attention_deficit_hyperactivity_disorder"
import DSM_SPECIFIC_LEARNING_DISORDER from "./pages/dsm/neurodevelopmental_disorders/specific_learning_disorder"
import DSM_DEVELOPMENTAL_COORDINATION_DISORDER from "./pages/dsm/neurodevelopmental_disorders/developmental_coordination_disorder"
import DSM_STEREOTYPIC_MOVEMENT_DISORDER from "./pages/dsm/neurodevelopmental_disorders/stereotypic_movement_disorder"
import DSM_TOURETTES_DISORDER from "./pages/dsm/neurodevelopmental_disorders/tourettes_disorder"
import DSM_PERSISTENT_MOTOR_OR_VOCAL_TIC_DISORDER from "./pages/dsm/neurodevelopmental_disorders/persistent_motor_or_vocal_tic_disorder"
import DSM_PROVISIONAL_TIC_DISORDER from "./pages/dsm/neurodevelopmental_disorders/provisional_tic_disorder"
import DSM_OTHER_SPECIFIED_TIC_DISORDER from "./pages/dsm/neurodevelopmental_disorders/other_specified_tic_disorder"
import DSM_UNSPECIFIED_TIC_DISORDER from "./pages/dsm/neurodevelopmental_disorders/unspecified_tic_disorder"
import DSM_OTHER_SPECIFIED_NEURODEVELOPMENTAL_DISORDER from "./pages/dsm/neurodevelopmental_disorders/other_specified_neurodevelopmental_disorder"
import DSM_UNSPECIFIED_NEURODEVELOPMENTAL_DISORDER from "./pages/dsm/neurodevelopmental_disorders/unspecified_neurodevelopmental_disorder"

import DSM_DELUSIONAL_DISORDER from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/delusional_disorder"
import DSM_BRIEF_PSYCHOTIC_DISORDER from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/brief_psychotic_disorder"
import DSM_SCHIZOPHRENIFORM_DISORDER from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/schizophreniform_disorder"
import DSM_SCHIZOPHRENIA from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/schizophrenia"
import DSM_SCHIZOAFFECTIVE_DISORDER from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/schizoaffective_disorder"
import DSM_PSYCHOTIC_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/psychotic_disorder_due_to_another_medical_condition"
import DSM_CATATONIA_ASSOCIATED_WITH_ANOTHER_MENTAL_DISORDER from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/catatonia_associated_with_another_mental_disorder"
import DSM_CATATONIC_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/catatonic_disorder_due_to_another_medical_condition"
import DSM_UNSPECIFIED_CATATONIA from "./pages/dsm/schizophrenia_spectrum_and_other_psychotic_disorders/unspecified_catatonia"

// import DSM_BIPOLAR_I_DISORDER from "./pages/dsm/bipolar_and_related_disorders/bipolar_i_disorder"
// import DSM_BIPOLAR_II_DISORDER from "./pages/dsm/bipolar_and_related_disorders/bipolar_ii_disorder"
// import DSM_CYCLOTHYMIC_DISORDER from "./pages/dsm/bipolar_and_related_disorders/cyclothymic_disorder"
// import DSM_BIPOLAR_AND_RELATED_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION from "./pages/dsm/bipolar_and_related_disorders/bipolar_and_related_disorder_due_to_another_medical_condition"
// import DSM_OTHER_SPECIFIED_BIPOLAR_AND_RELATED_DISORDER from "./pages/dsm/bipolar_and_related_disorders/other_specified_bipolar_and_related_disorder"
// import DSM_UNSPECIFIED_BIPOLAR_AND_RELATED_DISORDER from "./pages/dsm/bipolar_and_related_disorders/unspecified_bipolar_and_related_disorder"
// import DSM_UNSPECIFIED_MOOD_DISORDER from "./pages/dsm/bipolar_and_related_disorders/unspecified_mood_disorder"

// import DSM_DISRUPTIVE_MOOD_DYSREGULATION_DISORDER from "./pages/dsm/depressive_disorders/disruptive_mood_dysregulation_disorder"
// import DSM_MAJOR_DEPRESSIVE_DISORDER from "./pages/dsm/depressive_disorders/major_depressive_disorder"
// import DSM_PERSISTENT_DEPRESSIVE_DISORDER from "./pages/dsm/depressive_disorders/persistent_depressive_disorder"
// import DSM_PREMENSTRUAL_DYSPHORIC_DISORDER from "./pages/dsm/depressive_disorders/premenstrual_dysphoric_disorder"
// import DSM_DEPRESSIVE_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION from "./pages/dsm/depressive_disorders/depressive_disorder_due_to_another_medical_condition"
// import DSM_OTHER_SPECIFIED_DEPRESSIVE_DISORDER from "./pages/dsm/depressive_disorders/other_specified_depressive_disorder"
// import DSM_UNSPECIFIED_DEPRESSIVE_DISORDER from "./pages/dsm/depressive_disorders/unspecified_depressive_disorder"
// import DSM_UNSPECIFIED_MOOD_DISORDER_2 from "./pages/dsm/depressive_disorders/unspecified_mood_disorder"

// import DSM_SEPARATION_ANXIETY_DISORDER from "./pages/dsm/anxiety_disorders/separation_anxiety_disorder"
// import DSM_SELECTIVE_MUTISM from "./pages/dsm/anxiety_disorders/selective_mutism"
// import DSM_SPECIFIC_PHOBIA from "./pages/dsm/anxiety_disorders/specific_phobia"
// import DSM_SOCIAL_ANXIETY_DISORDER from "./pages/dsm/anxiety_disorders/social_anxiety_disorder"
// import DSM_PANIC_DISORDER from "./pages/dsm/anxiety_disorders/panic_disorder"
// import DSM_PANIC_ATTACK_SPECIFIER from "./pages/dsm/anxiety_disorders/panic_attack_specifier"
// import DSM_AGORAPHOBIA from "./pages/dsm/anxiety_disorders/agoraphobia"
// import DSM_GENERALIZED_ANXIETY_DISORDER from "./pages/dsm/anxiety_disorders/generalized_anxiety_disorder"
// import DSM_SUBSTANCE_MEDICATION_INDUCED_ANXIETY_DISORDER from "./pages/dsm/anxiety_disorders/substance_medication_induced_anxiety_disorder"
// import DSM_ANXIETY_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION from "./pages/dsm/anxiety_disorders/anxiety_disorder_due_to_another_medical_condition"
// import DSM_OTHER_SPECIFIED_ANXIETY_DISORDER from "./pages/dsm/anxiety_disorders/other_specified_anxiety_disorder"
// import DSM_UNSPECIFIED_ANXIETY_DISORDER from "./pages/dsm/anxiety_disorders/unspecified_anxiety_disorder"

// import DSM_OBSESSIVE_COMPULSIVE_DISORDER from "./pages/dsm/obsessive_compulsive_and_related_disorders/obsessive_compulsive_disorder"
// import DSM_BODY_DYSMORPHIC_DISORDER from "./pages/dsm/obsessive_compulsive_and_related_disorders/body_dysmorphic_disorder"
// import DSM_HOARDING_DISORDER from "./pages/dsm/obsessive_compulsive_and_related_disorders/hoarding_disorder"
// import DSM_TRICHOTILLOMANIA from "./pages/dsm/obsessive_compulsive_and_related_disorders/trichotillomania"
// import DSM_EXCORIATION_DISORDER from "./pages/dsm/obsessive_compulsive_and_related_disorders/excoriation_disorder"
// import DSM_OBSESSIVE_COMPULSIVE_AND_RELATED_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION from "./pages/dsm/obsessive_compulsive_and_related_disorders/obsessive_compulsive_and_related_disorder_due_to_another_medical_condition"
// import DSM_OTHER_SPECIFIED_OBSESSIVE_COMPULSIVE_AND_RELATED_DISORDER from "./pages/dsm/obsessive_compulsive_and_related_disorders/other_specified_obsessive_compulsive_and_related_disorder"
// import DSM_UNSPECIFIED_OBSESSIVE_COMPULSIVE_AND_RELATED_DISORDER from "./pages/dsm/obsessive_compulsive_and_related_disorders/unspecified_obsessive_compulsive_and_related_disorder"

// import DSM_REACTIVE_ATTACHMENT_DISORDER from "./pages/dsm/trauma_and stressor_related_disorders/reactive_attachment_disorder"
// import DSM_DISINHIBITED_SOCIAL_ENGAGEMENT_DISORDER from "./pages/dsm/trauma_and stressor_related_disorders/disinhibited_social_engagement_disorder"
// import DSM_POSTTRAUMATIC_STRESS_DISORDER from "./pages/dsm/trauma_and stressor_related_disorders/posttraumatic_stress_disorder"
// import DSM_ACUTE_STRESS_DISORDER from "./pages/dsm/trauma_and stressor_related_disorders/acute_stress_disorder"
// import DSM_ADJUSTMENT_DISORDERS from "./pages/dsm/trauma_and stressor_related_disorders/adjustment_disorders"
// import DSM_PROLONGED_GRIEF_DISORDER from "./pages/dsm/trauma_and stressor_related_disorders/prolonged_grief_disorder"
// import DSM_OTHER_SPECIFIED_TRAUMA_AND_STRESSOR_RELATED_DISORDER from "./pages/dsm/trauma_and stressor_related_disorders/other_specified_trauma_and_stressor_related_disorder"
// import DSM_UNSPECIFIED_TRAUMA_AND_STRESSOR_RELATED_DISORDER from "./pages/dsm/trauma_and stressor_related_disorders/unspecified_trauma_and_stressor_related_disorder"


export default function App() {
  return (
    <Routes>  
      <Route path="/" element={<HEADER />}> 

          <Route index element={<HOME />} /> 

          {/* Meta Pages */}
          <Route path="about" element={<ABOUT />} />
          <Route path="smbx38a" element={<SMBX38A />} />
          <Route path="smbx2" element={<SMBX2 />} />
          <Route path="dsm" element={<DSM />} />
          <Route path="health" element={<HEALTH />} />
          <Route path="other" element={<OTHER/>} />
          <Route path="*" element={<NOPAGE />} />

          {/* SMBX2 */}
          <Route path = "smbx2/amped_jewels"                              element = {<SMBX2_AMPED_JEWELS />} />
          <Route path = "smbx2/a_world_without_color"                     element = {<SMBX2_A_WORLD_WITHOUT_COLOR />} />
          <Route path = "smbx2/balloons"                                  element = {<SMBX2_BALLOONS />} />
          <Route path = "smbx2/binoculars"                                element = {<SMBX2_BINOCULARS />} />
          <Route path = "smbx2/boing"                                     element = {<SMBX2_BOING />} />
          <Route path = "smbx2/boomshell_koopa"                           element = {<SMBX2_BOOMSHELL_KOOPA />} />
          <Route path = "smbx2/bowser_castle"                             element = {<SMBX2_BOWSER_CASTLE />} />
          <Route path = "smbx2/button"                                    element = {<SMBX2_BUTTON />} />
          <Route path = "smbx2/glacier_glade"                             element = {<SMBX2_GLACIER_GLADE />} />
          <Route path = "smbx2/handy_torch"                               element = {<SMBX2_HANDY_TORCH />} />
          <Route path = "smbx2/holes"                                     element = {<SMBX2_HOLES />} />
          <Route path = "smbx2/in_the_halls_of_the_hotel_king"            element = {<SMBX2_IN_THE_HALLS_OF_THE_HOTEL_KING />} />
          <Route path = "smbx2/lectern"                                   element = {<SMBX2_LECTERN />} />
          <Route path = "smbx2/lever"                                     element = {<SMBX2_LEVER />} />
          <Route path = "smbx2/my_eyes_shine_bright_with_the_city_lights" element = {<SMBX2_MY_EYES_SHINE_BRIGHT_WITH_THE_CITY_LIGHTS />} />
          <Route path = "smbx2/neckys"                                    element = {<SMBX2_NECKYS />} />
          <Route path = "smbx2/plain_plain"                               element = {<SMBX2_PLAIN_PLAIN />} />
          <Route path = "smbx2/read_me_sign"                              element = {<SMBX2_READ_ME_SIGN />} />
          <Route path = "smbx2/redstone"                                  element = {<SMBX2_REDSTONE />} />
          <Route path = "smbx2/redstone_test_world"                       element = {<SMBX2_REDSTONE_TEST_WORLD />} />
          <Route path = "smbx2/spyblocks"                                 element = {<SMBX2_SPYBLOCKS />} />
          <Route path = "smbx2/tesla_coils"                               element = {<SMBX2_TESLA_COILS />} />
          <Route path = "smbx2/warphubs"                                  element = {<SMBX2_WARPHUBS />} />

          {/* SMBX38A */}
          <Route path = "smbx38a/cloudy_mountains"              element = {<SMBX38A_CLOUDY_MOUNTAINS />} />
          <Route path="smbx38a/color"                           element={<SMBX38A_COLOR />} />
          <Route path = "smbx38a/custom_cheats"                 element = {<SMBX38A_CUSTOM_CHEATS />} />
          <Route path = "smbx38a/custom_credits"                element = {<SMBX38A_CUSTOM_CREDITS />} />
          <Route path = "smbx38a/existential_crisis"            element = {<SMBX38A_EXISTENTIAL_CRISIS />} />
          <Route path = "smbx38a/faded_blocks"                  element = {<SMBX38A_FADED_BLOCKS />} />
          <Route path = "smbx38a/parrallaxx"                    element = {<SMBX38A_PARRALLAXX />} />
          <Route path = "smbx38a/the_great_smbx_38a_contest_i"  element = {<SMBX38A_THE_GREAT_SMBX_38A_CONTEST_I />} />
          <Route path = "smbx38a/the_great_smbx_38a_contest_ii" element = {<SMBX38A_THE_GREAT_SMBX_38A_CONTEST_II />} />
          <Route path = "smbx38a/xyz"                           element = {<SMBX38A_XYZ />} />
          <Route path = "smbx38a/ying_yang"                     element = {<SMBX38A_YING_YANG />} />

          {/* DSM */}

          <Route path="dsm/neurodevelopmental_disorders/intellectual_disability" element={<DSM_NEURODEVELOPMENT_DISORDER_INTELLECTUAL_DISABILITY/>} />
          <Route path="dsm/neurodevelopmental_disorders/global_development_delay" element={<DSM_NEURODEVELOPMENT_DISORDER_GLOBAL_DEVELOPMENT_DELAY/>} />
          <Route path="dsm/neurodevelopmental_disorders/unspecified_intellectual_developmental_disorder" element={<DSM_UNSPECIFIED_INTELLECTUAL_DEVELOPMENTAL_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/language_disorder" element={<DSM_LANGUAGE_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/speech_sound_disorder" element={<DSM_SPEECH_SOUND_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/childhood_onset_fluency_disorder" element={<DSM_CHILDHOOD_ONSET_FLUENCY_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/social_communication_disorder" element={<DSM_SOCIAL_COMMUNICATION_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/unspecified_communication_disorder" element={<DSM_UNSPECIFIED_COMMUNICATION_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/autism_spectrum_disorder" element={<DSM_AUTISM_SPECTRUM_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/attention_deficit_hyperactivity_disorder" element={<DSM_ATTENTION_DEFICIT_HYPERACTIVITY_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/other_specified_attention_deficit_hyperactivity_disorder" element={<DSM_OTHER_SPECIFIED_ATTENTION_DEFICIT_HYPERACTIVITY_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/unspecified_attention_deficit_hyperactivity_disorder" element={<DSM_UNSPECIFIED_ATTENTION_DEFICIT_HYPERACTIVITY_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/specific_learning_disorder" element={<DSM_SPECIFIC_LEARNING_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/developmental_coordination_disorder" element={<DSM_DEVELOPMENTAL_COORDINATION_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/stereotypic_movement_disorder" element={<DSM_STEREOTYPIC_MOVEMENT_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/tourettes_disorder" element={<DSM_TOURETTES_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/persistent_motor_or_vocal_tic_disorder" element={<DSM_PERSISTENT_MOTOR_OR_VOCAL_TIC_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/provisional_tic_disorder" element={<DSM_PROVISIONAL_TIC_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/other_specified_tic_disorder" element={<DSM_OTHER_SPECIFIED_TIC_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/unspecified_tic_disorder" element={<DSM_UNSPECIFIED_TIC_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/other_specified_neurodevelopmental_disorder" element={<DSM_OTHER_SPECIFIED_NEURODEVELOPMENTAL_DISORDER/>} />
          <Route path="dsm/neurodevelopmental_disorders/unspecified_neurodevelopmental_disorder" element={<DSM_UNSPECIFIED_NEURODEVELOPMENTAL_DISORDER/>} />

          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/delusional_disorder" element={<DSM_DELUSIONAL_DISORDER />}/>
          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/brief_psychotic_disorder" element={<DSM_BRIEF_PSYCHOTIC_DISORDER/>}/>
          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/schizophreniform_disorder" element={<DSM_SCHIZOPHRENIFORM_DISORDER/>}/>
          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/schizophrenia" element={<DSM_SCHIZOPHRENIA/>}/>
          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/schizoaffective_disorder" element={<DSM_SCHIZOAFFECTIVE_DISORDER/>}/>
          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/psychotic_disorder_due_to_another_medical_condition" element={<DSM_PSYCHOTIC_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION/>}/>
          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/catatonia_associated_with_another_mental_disorder" element={<DSM_CATATONIA_ASSOCIATED_WITH_ANOTHER_MENTAL_DISORDER/>}/>
          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/catatonic_disorder_due_to_another_medical_condition" element={<DSM_CATATONIC_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION/>}/>
          <Route path="dsm/schizophrenia_spectrum_and_other_psychotic_disorders/unspecified_catatonia" element={<DSM_UNSPECIFIED_CATATONIA/>}/>

          {/* <Route path="dsm/bipolar_and_related_disorders/bipolar_i_disorder" element={<DSM_BIPOLAR_I_DISORDER/>}/>
          <Route path="dsm/bipolar_and_related_disorders/bipolar_ii_disorder" element={<DSM_BIPOLAR_II_DISORDER/>}/>
          <Route path="dsm/bipolar_and_related_disorders/cyclothymic_disorder" element={<DSM_CYCLOTHYMIC_DISORDER/>}/>
          <Route path="dsm/bipolar_and_related_disorders/bipolar_and_related_disorder_due_to_another_medical_condition" element={<DSM_BIPOLAR_AND_RELATED_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION/>}/>
          <Route path="dsm/bipolar_and_related_disorders/other_specified_bipolar_and_related_disorder" element={<DSM_OTHER_SPECIFIED_BIPOLAR_AND_RELATED_DISORDER/>}/>
          <Route path="dsm/bipolar_and_related_disorders/unspecified_bipolar_and_related_disorder" element={<DSM_UNSPECIFIED_BIPOLAR_AND_RELATED_DISORDER/>}/>
          <Route path="dsm/bipolar_and_related_disorders/unspecified_mood_disorder" element={<DSM_UNSPECIFIED_MOOD_DISORDER/>}/>

          <Route path="dsm/depressive_disorders/disruptive_mood_dysregulation_disorder" element={<DSM_DISRUPTIVE_MOOD_DYSREGULATION_DISORDER/>}/>
          <Route path="dsm/depressive_disorders/major_depressive_disorder" element={<DSM_MAJOR_DEPRESSIVE_DISORDER/>}/>
          <Route path="dsm/depressive_disorders/persistent_depressive_disorder" element={<DSM_PERSISTENT_DEPRESSIVE_DISORDER/>}/>
          <Route path="dsm/depressive_disorders/premenstrual_dysphoric_disorder" element={<DSM_PREMENSTRUAL_DYSPHORIC_DISORDER/>}/>
          <Route path="dsm/depressive_disorders/depressive_disorder_due_to_another_medical_condition" element={<DSM_DEPRESSIVE_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION/>}/>
          <Route path="dsm/depressive_disorders/other_specified_depressive_disorder" element={<DSM_OTHER_SPECIFIED_DEPRESSIVE_DISORDER/>}/>
          <Route path="dsm/depressive_disorders/unspecified_depressive_disorder" element={<DSM_UNSPECIFIED_DEPRESSIVE_DISORDER/>}/>
          <Route path="dsm/depressive_disorders/unspecified_mood_disorder" element={<DSM_UNSPECIFIED_MOOD_DISORDER_2/>}/>

          <Route path="dsm/anxiety_disorders/separation_anxiety_disorder" element={<DSM_SEPARATION_ANXIETY_DISORDER/>}/>
          <Route path="dsm/anxiety_disorders/selective_mutism" element={<DSM_SELECTIVE_MUTISM/>}/>
          <Route path="dsm/anxiety_disorders/specific_phobia" element={<DSM_SPECIFIC_PHOBIA/>}/>
          <Route path="dsm/anxiety_disorders/social_anxiety_disorder" element={<DSM_SOCIAL_ANXIETY_DISORDER/>}/>
          <Route path="dsm/anxiety_disorders/panic_disorder" element={<DSM_PANIC_DISORDER/>}/>
          <Route path="dsm/anxiety_disorders/panic_attack_specifier" element={<DSM_PANIC_ATTACK_SPECIFIER/>}/>
          <Route path="dsm/anxiety_disorders/agoraphobia" element={<DSM_AGORAPHOBIA/>}/>
          <Route path="dsm/anxiety_disorders/generalized_anxiety_disorder" element={<DSM_GENERALIZED_ANXIETY_DISORDER/>}/>
          <Route path="dsm/anxiety_disorders/substance_medication_induced_anxiety_disorder" element={<DSM_SUBSTANCE_MEDICATION_INDUCED_ANXIETY_DISORDER/>}/>
          <Route path="dsm/anxiety_disorders/anxiety_disorder_due_to_another_medical_condition" element={<DSM_ANXIETY_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION/>}/>
          <Route path="dsm/anxiety_disorders/other_specified_anxiety_disorder" element={<DSM_OTHER_SPECIFIED_ANXIETY_DISORDER/>}/>
          <Route path="dsm/anxiety_disorders/unspecified_anxiety_disorder" element={<DSM_UNSPECIFIED_ANXIETY_DISORDER/>}/>

          <Route path="dsm/obsessive_compulsive_and_related_disorders/obsessive_compulsive_disorder" element={<DSM_OBSESSIVE_COMPULSIVE_DISORDER/>}/>
          <Route path="dsm/obsessive_compulsive_and_related_disorders/body_dysmorphic_disorder" element={<DSM_BODY_DYSMORPHIC_DISORDER/>}/>
          <Route path="dsm/obsessive_compulsive_and_related_disorders/hoarding_disorder" element={<DSM_HOARDING_DISORDER/>}/>
          <Route path="dsm/obsessive_compulsive_and_related_disorders/trichotillomania" element={<DSM_TRICHOTILLOMANIA/>}/>
          <Route path="dsm/obsessive_compulsive_and_related_disorders/excoriation_disorder" element={<DSM_EXCORIATION_DISORDER/>}/>
          <Route path="dsm/obsessive_compulsive_and_related_disorders/obsessive_compulsive_and_related_disorder_due_to_another_medical_condition" element={<DSM_OBSESSIVE_COMPULSIVE_AND_RELATED_DISORDER_DUE_TO_ANOTHER_MEDICAL_CONDITION/>}/>
          <Route path="dsm/obsessive_compulsive_and_related_disorders/other_specified_obsessive_compulsive_and_related_disorder" element={<DSM_OTHER_SPECIFIED_OBSESSIVE_COMPULSIVE_AND_RELATED_DISORDER/>}/>
          <Route path="dsm/obsessive_compulsive_and_related_disorders/unspecified_obsessive_compulsive_and_related_disorder" element={<DSM_UNSPECIFIED_OBSESSIVE_COMPULSIVE_AND_RELATED_DISORDER/>}/>

          <Route path="dsm/trauma_and stressor_related_disorders/ element={<DSM_REACTIVE_ATTACHMENT_DISORDER/>}/>reactive_attachment_disorder"
          <Route path="dsm/trauma_and stressor_related_disorders/ element={<DSM_DISINHIBITED_SOCIAL_ENGAGEMENT_DISORDER/>}/>disinhibited_social_engagement_disorder"
          <Route path="dsm/trauma_and stressor_related_disorders/ element={<DSM_POSTTRAUMATIC_STRESS_DISORDER/>}/>posttraumatic_stress_disorder"
          <Route path="dsm/trauma_and stressor_related_disorders/ element={<DSM_ACUTE_STRESS_DISORDER/>}/>acute_stress_disorder"
          <Route path="dsm/trauma_and stressor_related_disorders/ element={<DSM_ADJUSTMENT_DISORDERS/>}/>adjustment_disorders"
          <Route path="dsm/trauma_and stressor_related_disorders/ element={<DSM_PROLONGED_GRIEF_DISORDER/>}/>prolonged_grief_disorder"
          <Route path="dsm/trauma_and stressor_related_disorders/ element={<DSM_OTHER_SPECIFIED_TRAUMA_AND_STRESSOR_RELATED_DISORDER/>}/>other_specified_trauma_and_stressor_related_disorder"
          <Route path="dsm/trauma_and stressor_related_disorders/ element={<DSM_UNSPECIFIED_TRAUMA_AND_STRESSOR_RELATED_DISORDER/>}/>unspecified_trauma_and_stressor_related_disorder" */}

      </Route> 
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <div className="content-container">
      <App />
      <br /><br /><br />
      </div>
      <footer className="footer--pin">
      <FOOTER />
      </footer>
    </HashRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
