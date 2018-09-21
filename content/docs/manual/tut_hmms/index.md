---
title: "Install HMMs"
type: "manual"
menu:
  manual:
    parent: "Tutorials"
    weight: 20
---

In order to use the NuVs algorithm, you must first install HMM profiles and annotations. Together these data allow NuVs to identify and annotate sequences assembled from your sample that might comprise part of a novel viral genome.

# 1. Install Official Data {#official}

1. Navigate to the _HMMs_ view in the main navigation bar. You should see something like this if no HMM data have already been installed:
   !["No HMM data found"](no_data.png)

2. Click the **Install Official** button to begin downloading the data. This could take some time. The page should look something like this:
   !["Installing Official HMM Data"](installing.png)

3. When the installation is complete, the HMM data will load and you will see a list of annotations.
   !["Installed Official HMM Data](top.png)

4. Clicking on an HMM item will show the detailed information for that HMM profile and its biological annotation.
   !["HMM Detail"](detail.png)

5. This is all that is required to run NuVs using HMM profiles.
