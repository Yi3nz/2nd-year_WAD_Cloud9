<?xml version="1.0"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

<xsl:template match="*">
    <xsl:apply-templates/>
</xsl:template>

<xsl:template match="text()">
    <xsl:apply-templates/>
</xsl:template>

<xsl:template match="/">
    <html>
    <head>
        <title>Recipe catalogue</title>
    </head>
    <body>
<!-- Starter -->		
<h2>Starter dishes:</h2>		
<xsl:for-each select="CATALOG/STARTER/RECIPE">
  <div style="padding:4px">
    Name: <xsl:value-of select="NAME"/>
	<br/>
    Timing: <xsl:value-of select="TIMING"/>
	<br/>
    Difficultly: <xsl:value-of select="DIFFICULTLY"/>
  </div>
</xsl:for-each>
<!-- Main -->		
<h2>Main dishes:</h2>		
<xsl:for-each select="CATALOG/STARTER/RECIPE">
  <div style="padding:4px">
    Name: <xsl:value-of select="NAME"/>
	<br/>
    Timing: <xsl:value-of select="TIMING"/>
	<br/>
    Difficultly: <xsl:value-of select="DIFFICULTLY"/>
  </div>
</xsl:for-each>	
<!-- Dessert -->		
<h2>Dessert dishes:</h2>		
<xsl:for-each select="CATALOG/STARTER/RECIPE">
  <div style="padding:4px">
    Name: <xsl:value-of select="NAME"/>
	<br/>
    Timing: <xsl:value-of select="TIMING"/>
	<br/>
    Difficultly: <xsl:value-of select="DIFFICULTLY"/>
  </div>
</xsl:for-each>		
		
		
    </body>
    </html>
</xsl:template>
</xsl:transform>





















