# Content

Slides for an upcoming workshop on data visualization for scientist.

Mirror of [Data Visualization For Scientists](https://github.com/othomantegazza/dataviz-for-scientists-slides/), but the R code is translated to Python. 

# Deploy Locally

To deploy the slides locally:

1. Install Quarto: https://quarto.org/docs/get-started/

2. Open `dv-for-scientist-slides.Rproj` in Rstudio.

3. At the R console, install all R packages with:

```r
renv::restore()
```

4 At the shell console, deploy the slides with:

```sh
quarto preview
```

The slides will be available at localhost:4200.

# License

See file [LICENSE](LICENSE)
