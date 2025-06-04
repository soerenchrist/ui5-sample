/* checksum : ccf0676ab10db77bb190bef94fa75443 */
@cds.external : true
@cds.persistence.skip : true
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.UpdateRestrictions.Updatable : false
entity ReviewService.Reviews {
  key ID : Integer not null;
  @Common.FieldControl : #Mandatory
  slug : LargeString;
  @Common.FieldControl : #Mandatory
  bookTitle : LargeString;
  @Validation.Minimum : 0
  @Validation.Maximum : 5
  rating : Integer;
  @Common.FieldControl : #Mandatory
  title : LargeString;
  @Common.FieldControl : #Mandatory
  text : LargeString;
};

@cds.external : true
service ReviewService {};

