import { useEffect } from "react"
import { DSMack, TextClick } from "components";

const DSM = () => {
  useEffect(() => {
    document.title = "SetaDiagnosticAndStatisticalManualOfMentalDisorders"
  })
  
  return (<>
    <center>
      <section className="card">

        <p style={{ 'font-size': 60 }}>DSM5-TR</p>
        <p style={{ 'font-size': 16 }}>dsm summaries WIP!</p>

        <br /><br />
      </section>

      <br />
      <br />
      <br />
      <br />


      <DSMack name="Neurodevelopmental Disorders">
        <b>Intellectual Developmental Disorders</b>
        <ul>
          <li><TextClick link="neurodevelopmental_disorders/intellectual_disability">Intellectual Developmental Disorder (Intellectual Disability)</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/global_development_delay">Global Developmental Delay</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/unspecified_intellectual_developmental_disorder">Unspecified Intellectual Developmental Disorder (Intellectual Disability)</TextClick></li>
        </ul><br/>
        

        <b>Communication Disorders</b>
        <ul>
          <li><TextClick link="neurodevelopmental_disorders/language_disorder">Language Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/speech_sound_disorder">Speech Sound Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/childhood_onset_fluency_disorder">Childhood-Onset Fluency Disorder (Stuttering)</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/social_communication_disorder">Social (Pragmatic) Communication Disorder </TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/unspecified_communication_disorder">Unspecified Communication Disorder</TextClick></li>
        </ul><br/>
        
        
        <b>Autism Spectrum Disorder</b>
        <ul>
          <li><TextClick link="neurodevelopmental_disorders/autism_spectrum_disorder">Autism Spectrum Disorder</TextClick></li>
        </ul><br/>

        <b>Attention-Deficit/Hyperactivity Disorder</b>
        <ul>
          <li><TextClick link="neurodevelopmental_disorders/attention_deficit_hyperactivity_disorder">Attention-Deficit/Hyperactivity Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/other_specified_attention_deficit_hyperactivity_disorder">Other Specified Attention-Deficit/Hyperactivity Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/unspecified_attention_deficit_hyperactivity_disorder">Unspecified Attention-Deficit/Hyperactivity Disorder</TextClick></li>
        </ul><br/>

        <b>Specific Learning Disorder</b>
        <ul>
          <li><TextClick link="neurodevelopmental_disorders/specific_learning_disorder">Specific Learning Disorder</TextClick></li>
        </ul><br/>

        <b>Motor Disorders</b>
        <ul>
          <li><TextClick link="neurodevelopmental_disorders/developmental_coordination_disorder">Developmental Coordination Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/stereotypic_movement_disorder">Stereotypic Movement Disorder</TextClick></li>
        </ul><br/>

        <b>Tic Disorders</b>
        <ul>
          <li><TextClick link="neurodevelopmental_disorders/tourettes_disorder">Tourette's Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/persistent_motor_or_vocal_tic_disorder">Persistent (Chronic) Motor or Vocal Tic Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/provisional_tic_disorder">Provisional Tic Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/other_specified_tic_disorder">Other Specified Tic Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/unspecified_tic_disorder">Unspecified Tic Disorder</TextClick></li>
        </ul><br/>

        <b>Other Neurodevelopmental Disorders</b>
        <ul>
          <li><TextClick link="neurodevelopmental_disorders/other_specified_neurodevelopmental_disorder">Other Specified Neurodevelopmental Disorder</TextClick></li>
          <li><TextClick link="neurodevelopmental_disorders/unspecified_neurodevelopmental_disorder">Unspecified Neurodevelopmental Disorder</TextClick></li>
        </ul>
      </DSMack><p/>


      <DSMack name="Schizophrenia Spectrum and Other Psychotic Disorders">
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/delusional_disorder">Delusional Disorder</TextClick></li> 
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/brief_psychotic_disorder">Brief Psychotic Disorder</TextClick></li>
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/schizophreniform_disorder">Schizophreniform Disorder</TextClick></li>
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/schizophrenia">Schizophrenia</TextClick></li>
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/schizoaffective_disorder">Schizoaffective Disorder</TextClick></li>
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/psychotic_disorder_due_to_another_medical_condition">Psychotic Disorder Due to Another Medical Condition</TextClick></li>
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/catatonia_associated_with_another_mental_disorder">Catatonia Associated With Another Mental Disorder (Catatonia Specifier)</TextClick></li>
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/catatonic_disorder_due_to_another_medical_condition">Catatonic Disorder Due to Another Medical Condition</TextClick></li>
        <li><TextClick link="schizophrenia_spectrum_and_other_psychotic_disorders/unspecified_catatonia">Unspecified Catatonia</TextClick></li>
      </DSMack><p/>


      <DSMack name="Bipolar and Related Disorders">
        <li>Bipolar I Disorder</li>
        <li>Bipolar II Disorder</li>
        <li>Cyclothymic disorder</li>
        <li>Bipolar and Related Disorder Due to Another Medical Condition</li>
        <li>Other Specified Bipolar and Related Disorder</li>
        <li>Unspecified Bipolar and Related Disorder</li>
        <li>Unspecified Mood Disorder</li>
      </DSMack><p/>


      <DSMack name="Depressive Disorders">
        <li>Disruptive Mood Dysregulation Disorder</li>
        <li>Major Depressive Disorder</li>
        <li>Persistent Depressive Disorder</li>
        <li>Premenstrual Dysphoric Disorder</li>
        <li>Depressive Disorder Due to Another Medical Condition</li>
        <li>Other Specified Depressive Disorder</li>
        <li>Unspecified Depressive Disorder</li>
        <li>Unspecified Mood Disorder</li>
      </DSMack><p/>


      <DSMack name="Anxiety Disorders">
        <li>Separation Anxiety Disorder</li>
        <li>Selective Mutism</li>
        <li>Specific Phobia</li>
        <li>Social Anxiety Disorder</li>
        <li>Panic Disorder</li>
        <li>Panic Attack Specifier</li>
        <li>Agoraphobia</li>
        <li>Generalized Anxiety Disorder</li>
        <li>Substance/Medication-Induced Anxiety Disorder</li>
        <li>Anxiety Disorder Due to Another Medical Condition</li>
        <li>Other Specified Anxiety Disorder</li>
        <li>Unspecified Anxiety Disorder</li>
      </DSMack><p/>


      <DSMack name="Obsessive-Compulsive and Related Disorders">
        <li>Obsessive-Compulsive Disorder</li>
        <li>Body Dysmorphic Disorder</li>
        <li>Hoarding Disorder</li>
        <li>Trichotillomania (Hair-Pulling Disorder)</li>
        <li>Excoriation (Skin-Picking) Disorder</li>
        <li>Obsessive-Compulsive and Related Disorder Due to Another Medical Condition</li>
        <li>Other Specified Obsessive-Compulsive and Related Disorder</li>
        <li>Unspecified Obsessive-Compulsive and Related Disorder</li>
      </DSMack><p/>


      <DSMack name="Trauma- and Stressor-Related Disorders">
        <li>Reactive Attachment Disorder</li>
        <li>Disinhibited Social Engagement Disorder</li>
        <li>Posttraumatic Stress Disorder</li>
        <li>Acute Stress Disorder</li>
        <li>Adjustment Disorders</li>
        <li>Prolonged Grief Disorder</li>
        <li>Other Specified Trauma- and Stressor-Related Disorder</li>
        <li>Unspecified Trauma- and Stressor-Related Disorder</li>
      </DSMack><p/>


      <DSMack name="Dissociative Disorders">
        <li>Dissociative Identity Disorder</li>
        <li>Dissociative Amnesia</li>
        <li>Depersonalization/Derealization Disorder</li>
        <li>Other Specified Dissociative Disorder</li>
        <li>Unspecified Dissociative Disorder</li>
      </DSMack><p/>


      <DSMack name="Somatic Symptom and Related Disorders">
        <li>Somatic Symptom Disorder</li>
        <li>Illness Anxiety Disorder</li>
        <li>Functional Neurological Symptom Disorder (Conversion Disorder)</li>
        <li>Psychological Factors Affecting Other Medical Conditions</li>
        <li>Factitious Disorder</li>
        <li>Other Specified Somatic Symptom and Related Disorder</li>
        <li>Unspecified Somatic Symptom and Related Disorder</li>
      </DSMack><p/>


      <DSMack name="Feeding and Eating Disorders">
        <li>Pica</li>
        <li>Rumination Disorder</li>
        <li>Avoidant/Restrictive Food Intake Disorder</li>
        <li>Anorexia Nervosa</li>
        <li>Bulimia Nervosa</li>
        <li>Binge-Eating Disorder</li>
        <li>Other Specified Feeding or Eating Disorder</li>
        <li>Unspecified Feeding or Eating Disorder</li>
      </DSMack><p/>


      <DSMack name="Elimination Disorders">
        <li>Enuresis</li>
        <li>Encopresis</li>
        <li>Other Specified Elimination Disorder</li>
        <li>Unspecified Elimination Disorder</li>
      </DSMack><p/>


      <DSMack name="Sleep-Wake Disorders">
        <li>Insomnia Disorder</li>
        <li>Hypersomnolence Disorder</li>
        <li>Narcolepsy</li><br/>

      
        <b>Breathing-Related Sleep Disorders</b>
        <ul>
          <li>Obstructive Sleep Apnea Hypopnea</li>
          <li>Central Sleep Apnea</li>
          <li>Sleep-Related Hypoventilation</li>
        </ul><br />
        
        <li>Circadian Rhythm Sleep-Wake Disorders</li><br />

        <b>Parasomnias</b>
        <ul>
          <li>Non-Rapid Eye Movement Sleep Arousal Disorders</li>
          <li>Nightmare Disorder</li>
          <li>Rapid Eye Movement Sleep Behavior Disorder</li>
        </ul><br />

      <li>Restless Legs Syndrome</li>
      <li>Substance/Medication-Induced Sleep Disorder </li>
      <li>Other Specified Insomnia Disorder</li>
      <li>Unspecified Insomnia Disorder</li>
      <li>Other Specified Hypersomnolence Disorder</li>
      <li>Unspecified Hypersomnolence Disorder</li>
      <li>Other Specified Sleep-Wake Disorder</li>
      <li>Unspecified Sleep-Wake Disorder</li>

      </DSMack>


      <DSMack name="Sexual Dysfunctions">
        <li>Delayed Ejaculation</li>
        <li>Erectile Disorder</li>
        <li>Female Orgasmic Disorder</li>
        <li>Female Sexual Interest/Arousal Disorder</li>
        <li>Genito-Pelvic Pain/Penetration Disorder</li>
        <li>Male Hypoactive Sexual Desire Disorder</li>
        <li>Premature (Early) Ejaculation</li>
        <li>Substance/Medication-Induced Sexual Dysfunction</li>
        <li>Other Specified Sexual Dysfunction</li>
        <li>Unspecified Sexual Dysfunction</li>
      </DSMack><p/>


      <DSMack name="Gender Dysphoria">
        <li>Gender Dysphoria</li>
        <li>Other Specified Gender Dysphoria</li>
        <li>Unspecified Gender Dysphoria</li>
      </DSMack><p/>


      <DSMack name="Disruptive, Impulse-Control, and Conduct Disorders">
        <li>Oppositional Defiant Disorder</li>
        <li>Intermittent Explosive Disorder</li>
        <li>Conduct Disorder</li>
        <li>Antisocial Personality Disorder</li>
        <li>Pyromania</li>
        <li>Kleptomania</li>
        <li>Other Specified Disruptive, Impulse-Control, and Conduct Disorder</li>
        <li>Unspecified Disruptive, Impulse-Control, and Conduct Di</li>
      </DSMack><p/>


      <DSMack name="Substance-Related and Addictive Disorders">
        <b>Substance-Related Disorders</b>
        <ul>
          <li><b>Alcohol Related Disorders</b></li>
          <ul>
            <li>Alcohol Use Disorder</li>
            <li>Alcohol Intoxication</li>
            <li>Alcohol Withdrawal</li>
            <li>Unspecified Alcohol-Related Disorder</li>
          </ul>
          <li><b>Caffeine-Related Disorders</b></li>
          <ul>
            <li>Caffeine Intoxication</li>
            <li>Caffeine Withdrawal</li>
            <li>Caffeine-Induced Mental Disorders</li>
            <li>Unspecified Caffeine-Related Disorder</li>
          </ul>
          <li><b>Cannabis-Related Disorders</b></li>
          <ul>
            <li>Cannabis Use Disorder</li>
            <li>Cannabis Intoxication</li>
            <li>Cannabis Withdrawal</li>
            <li>Cannabis-Induced Mental Disorders</li>
            <li>Unspecified Cannabis-Related Disorder</li>
          </ul>
          <li><b>Hallucinogen-Related Disorders</b></li>
          <ul>
            <li>Phencyclidine Use Disorder</li>
            <li>Other Hallucinogen Use Disorder</li>
            <li>Phencyclidine Intoxication</li>
            <li>Other Hallucinogen Intoxication</li>
            <li>Hallucinogen Persisting Perception Disorder</li>
            <li>Phencyclidine-Induced Mental Disorders</li>
            <li>Hallucinogen-Induced Mental Disorders</li>
            <li>Unspecified Phencyclidine-Related Disorder</li>
            <li>Unspecified Hallucinogen-Related Disorder</li>
          </ul>          
          <li><b>Inhalant-Related Disorders</b></li>
          <ul>
            <li>Inhalant Use Disorder</li>
            <li>Inhalant Intoxication</li>
            <li>Inhalant-Induced Mental Disorders</li>
            <li>Unspecified Inhalant-Related Disorder</li>
          </ul>     
          <li><b>Sedative-, Hypnotic-, or Anxiolytic-Related Disorders</b></li>
          <ul>
            <li>Sedative, Hypnotic, or Anxiolytic Use Disorder</li>
            <li>Sedative, Hypnotic, or Anxiolytic Intoxication</li>
            <li>Sedative, Hypnotic, or Anxiolytic Withdrawal</li>
            <li>Sedative-, Hypnotic-, or Anxiolytic-Induced Mental Disorders</li>
            <li>Unspecified Sedative-, Hypnotic-, or Anxiolytic-Related Disorder</li>
          </ul>      
          <li><b>Stimulant-Related Disorders</b></li>
          <ul>
            <li>Stimulant Use Disorder</li>
            <li>Stimulant Intoxication</li>
            <li>Stimulant Withdrawal</li>
            <li>Stimulant-Induced Mental Disorders</li>
            <li>Unspecified Stimulant-Related Disorder</li>
          </ul>          
          <li><b>Other (or Unknown) Substance-Related Disorders</b></li>
          <ul>
            <li>Other (or Unknown) Substance Use Disorder</li>
            <li>Other (or Unknown) Substance Intoxication</li>
            <li>Other (or Unknown) Substance Withdrawal</li>
            <li>Other (or Unknown) Substance-Induced Mental Disorders</li>
            <li>Unspecified Other (or Unknown) Substance-Related Disorder</li>
          </ul>                                           
        </ul>
        <b>Non-Substance-Related Disorders</b>
        <ul>
          <li>Gambling Disorder</li>
        </ul>
      </DSMack><p/>


      <DSMack name="Neurocognitive Disorders">
        <li>Delirium</li>
        <li>Other Specified Delirium</li>
        <li>Unspecified Delirium</li>

        <br/>

        <b>Major and Mild Neurocognitive Disorders</b>
        <ul>
          <li>Major and Mild Neurocognitive Disorders</li>
          <li>Mild Neurocognitive Disorder</li>
          <li>Major or Mild Neurocognitive Disorder Due to Alzheimer's Disease</li>
          <li>Major or Mild Frontotemporal Neurocognitive Disorder</li>
          <li>Major or Mild Neurocognitive Disorder With Lewy Bodies</li>
          <li>Major or Mild Vascular Neurocognitive Disorder</li>
          <li>Major or Mild Neurocognitive Disorder Due to Traumatic Brain Injury</li>
          <li>Substance/Medication-Induced Major or Mild Neurocognitive Disorder</li>
          <li>Major or Mild Neurocognitive Disorder Due to HIV Infection</li>
          <li>Major or Mild Neurocognitive Disorder Due to Prion Disease</li>
          <li>Major or Mild Neurocognitive Disorder Due to Parkinson's Disease</li>
          <li>Major or Mild Neurocognitive Disorder Due to Huntington's Disease</li>
          <li>Major or Mild Neurocognitive Disorder Due to Another Medical Condition</li>
          <li>Major or Mild Neurocognitive Disorder Due to Multiple Etiologies</li>
        </ul>

        <li>Unspecified Neurocognitive Disorder</li>
      </DSMack><p/>


      <DSMack name="Personality Disorders">
        <b>Cluster A Personality Disorders</b>
        <ul>
          <li>Paranoid Personality Disorder</li>
          <li>Schizoid Personality Disorder</li>
          <li>Schizotypal Personality Disorder</li>
        </ul><br/>

        <b>Cluster B Personality Disorders</b>
        <ul>
          <li>Antisocial Personality Disorder</li>
          <li>Borderline Personality Disorder</li>
          <li>Histrionic Personality Disorder</li>
          <li>Narcissistic Personality Disorder</li>
        </ul><br/>

        <b>Cluster C Personality Disorders</b>
        <ul>
          <li>Avoidant Personality Disorder</li>
          <li>Dependent Personality Disorder</li>
          <li>Obsessive-Compulsive Personality Disorder</li>
        </ul><br/>

        <b>Other Personality Disorders</b>
        <ul>
          <li>Personality Change Due to Another Medical Condition</li>
          <li> Other Specified Personality Disorder</li>
          <li>Unspecified Personality Disorder</li>
        </ul>
      </DSMack><p/>


      <DSMack name="Paraphilic Disorders">
        <li>Voyeuristic Disorder</li>
        <li>Exhibitionistic Disorder</li>
        <li>Frotteuristic Disorder</li>
        <li>Sexual Masochism Disorder</li>
        <li>Sexual Sadism Disorder</li>
        <li>Pedophilic Disorder </li>
        <li>Fetishistic Disorder</li>
        <li>Transvestic Disorder</li>
        <li>Other Specified Paraphilic Disorder</li>
        <li>Unspecified Paraphilic Disorder</li>
      </DSMack><p/>


      <DSMack name="Other Mental Disorders and Additional Codes">
        <li>Other Specified Mental Disorder Due to Another Medical Condition</li>
        <li>Unspecified Mental Disorder Due to Another Medical Condition</li>
        <li>Other Specified Mental Disorder</li>
        <li>Unspecified Mental Disorder</li>
        <li>No Diagnosis or Condition</li>
      </DSMack><p/>


      <DSMack name="Medication-Induced Movement Disorders and Other Adverse Effects of Medication">
        <li>Medication-Induced Parkinsonism</li>
        <li>Neuroleptic Malignant Syndrome</li>
        <li>Medication-Induced Acute Dystonia</li>
        <li>Medication-Induced Acute Akathisia</li>
        <li>Tardive Dyskinesia</li>
        <li>Tardive Dystonia</li>
        <li>Tardive Akathisia</li>
        <li>Medication-Induced Postural Tremor</li>
        <li>Other Medication-Induced Movement Disorder</li>
        <li>Antidepressant Discontinuation Syndrome</li>
        <li>Other Adverse Effect of Medication</li>
      </DSMack><p/>


      <DSMack name="Other Conditions That May Be a Focus of Clinical Attention">
        <li>Suicidal Behavior and Nonsuicidal Self-Injury</li>
        <li>Abuse and Neglect</li>
        <li>Relational problems</li>
        <li>Educational problems</li>
        <li>Occupational problems</li>
        <li>Housing problems</li>
        <li>Economic problems</li>
        <li>Problems related to the social environment</li>
        <li>Problems related to interaction with the legal system</li>
        <li>Problems related to other psychosocial, personal, and environmental circumstances</li>
        <li>Problems related to access to medical and other health care</li>
        <li>Circumstances of personal history</li>
        <li>Other health service encounters for counseling and medical advice</li>
        <li>Additional conditions or problems that may be a focus of clinical attention</li>
      </DSMack><p/>

    </center>
  </>)
};

export default DSM;